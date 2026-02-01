import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    User,
    Settings,
    FileText,
    CheckCircle,
    ArrowLeft,
    ArrowRight,
    Check,
    MapPin,
    Calendar,
    BookOpen,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { cn, formatCurrency } from '../lib/utils';
import { upcomingEvent } from '../data/mockData';

// Zod Schemas
const registrationSchema = z.object({
    // Personal Info
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    dentalPracticeName: z.string().min(2, 'Dental practice name is required'),
    surgeryAddress: z.string().min(5, 'Surgery address is required'),
    dataConsent: z.boolean().refine(val => val === true, 'Data consent is required'),

    // Preferences
    accommodationNeeded: z.enum(['yes', 'no']),
    accommodationDays: z.enum(['1', '2', '3']).optional(),
    accommodationDetails: z.string().optional(),
    dietaryRestrictions: z.string().optional(),
    accessibilityNeeds: z.string().optional(),

    // Extra Options
    daysSelection: z.enum(['1', '2', '3']).optional(),
    workshopAddOn: z.boolean().optional(),
    networkingDinner: z.boolean().optional(),
    recordingsAccess: z.boolean().optional(),
    vipSeating: z.boolean().optional(),
});

type FormData = z.infer<typeof registrationSchema>;

const steps = [
    { id: 1, name: 'Personal & Surgery', icon: User },
    { id: 2, name: 'Accommodation', icon: Settings },
    { id: 3, name: 'Duration', icon: FileText },
    { id: 4, name: 'Review', icon: CheckCircle },
];

// specialties and interestAreas removed as they are no longer used in the new flow
// addOns removed as optional extras were requested to be removed

const STORAGE_KEY = 'registration-form-data';

export default function Register() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const location = useLocation();
    const eventFromState = location.state?.event;
    const initialDays = (location.state?.selectedDays as '1' | '2' | '3') || '3';

    const colors = {
        bg: isDark ? 'bg-black' : 'bg-white',
        bgAlt: isDark ? 'bg-zinc-950' : 'bg-white',
        text: isDark ? 'text-white' : 'text-black',
        textSecondary: isDark ? 'text-white/60' : 'text-black/60',
        textMuted: isDark ? 'text-white/40' : 'text-black/40',
        border: isDark ? 'border-white/10' : 'border-black/10',
        accent: isDark ? 'text-white' : 'text-black',
        accentBg: isDark ? 'bg-white/10' : 'bg-black/5',
        cardBg: isDark ? 'bg-black' : 'bg-white',
        inputBg: isDark ? 'bg-black' : 'bg-white',
        inputBorder: isDark ? 'border-black/10' : 'border-black/20',
        inputFocus: isDark ? 'focus:border-white' : 'focus:border-black',
    };

    const methods = useForm<FormData>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dentalPracticeName: '',
            surgeryAddress: '',
            dataConsent: false,
            accommodationNeeded: 'no',
            accommodationDays: '1',
            accommodationDetails: '',
            dietaryRestrictions: '',
            accessibilityNeeds: '',
            daysSelection: initialDays,
            workshopAddOn: false,
            networkingDinner: false,
            recordingsAccess: false,
            vipSeating: false,
        },
        mode: 'onChange',
    });

    const { register, handleSubmit, watch, trigger, formState: { errors }, setValue, getValues } = methods;
    const formValues = watch();

    // Load saved data from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            Object.keys(parsed).forEach((key) => {
                setValue(key as keyof FormData, parsed[key]);
            });
        }
    }, [setValue]);

    // Save to localStorage on change
    useEffect(() => {
        const subscription = watch((data) => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const calculatePricing = () => {
        const selectedEvent = eventFromState || upcomingEvent;
        const days = parseInt(formValues.daysSelection || '3');

        // Robust base price calculation with fallbacks
        let basePrice = 500;

        if (selectedEvent.multiDayPricing && selectedEvent.multiDayPricing[days]) {
            basePrice = selectedEvent.multiDayPricing[days];
        } else if (selectedEvent.basePrice) {
            basePrice = typeof selectedEvent.basePrice === 'string'
                ? parseInt((selectedEvent.basePrice as string).replace(/\D/g, '')) || 500
                : selectedEvent.basePrice;
        } else if ((selectedEvent as any).pricingTiers?.[0]?.price) {
            basePrice = parseInt((selectedEvent as any).pricingTiers[0].price.replace(/\D/g, '')) || 500;
        }

        let total = basePrice;
        const extras: { name: string; price: number }[] = [];

        // Accommodation pricing: £100 per night
        if (formValues.accommodationNeeded === 'yes') {
            const nights = parseInt(formValues.accommodationDays || '0');
            const cost = nights * 100;
            if (cost > 0) {
                total += cost;
                extras.push({ name: `Accommodation (${nights} ${nights === 1 ? 'Night' : 'Nights'})`, price: cost });
            }
        }

        return { basePrice, extras, total };
    };

    const pricing = calculatePricing();

    const nextStep = async () => {
        let isValid = false;

        if (currentStep === 1) {
            isValid = await trigger(['firstName', 'lastName', 'email', 'phone', 'dentalPracticeName', 'surgeryAddress', 'dataConsent']);
        } else if (currentStep === 2) {
            isValid = await trigger(['accommodationNeeded', 'accommodationDays']);
        } else {
            isValid = true;
        }

        if (isValid && currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = async () => {
        // Guard: Only allow submission if we are on the final review step
        if (currentStep !== steps.length) {
            nextStep();
            return;
        }

        setIsSubmitting(true);
        try {
            // Remove the timeout for a faster, more reliable redirect once clicked
            const formData = getValues();
            localStorage.removeItem(STORAGE_KEY);
            navigate('/payment', {
                state: {
                    registration: formData,
                    pricing,
                },
            });
        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderInput = (
        name: keyof FormData,
        label: string,
        type: string = 'text',
        placeholder: string = ''
    ) => (
        <div className="space-y-3">
            <label htmlFor={name} className={`block text-[10px] font-black uppercase tracking-[0.3em] ${colors.text}`}>
                {label}
            </label>
            <input
                id={name}
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className={cn(
                    `w-full px-5 py-4 border ${colors.inputBorder} ${colors.inputBg} ${colors.text} ${colors.inputFocus} focus:outline-none transition-all text-[13px] uppercase tracking-wider ${isDark ? 'placeholder:text-white/20' : 'placeholder:text-black/20'}`,
                    errors[name] && 'border-red-500 focus:border-red-500'
                )}
            />
            {errors[name] && (
                <p className="mt-1 text-[10px] uppercase font-black tracking-widest text-red-500">{errors[name]?.message as string}</p>
            )}
        </div>
    );

    // renderSelect removed as it is no longer used in the new flow

    return (
        <main className={cn(`min-h-screen ${colors.bgAlt} transition-colors duration-500 py-12 pt-navbar`)}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-4`}>
                        Register for Masterclass
                    </h1>
                    <p className={colors.textSecondary}>
                        Complete your registration in 4 simple steps
                    </p>
                </motion.div>

                {/* Progress Steps - Minimalist */}
                <div className="mb-20">
                    <div className="flex items-center justify-between max-w-2xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center flex-1 last:flex-none">
                                <div className="flex flex-col items-center relative z-10">
                                    <div
                                        className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] transition-all z-10 ${currentStep >= step.id
                                            ? isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                                            : isDark ? 'bg-black text-white/20 border-white/10' : 'bg-white text-black/20 border-black/10'
                                            }`}
                                    >
                                        {currentStep > step.id ? <Check className="w-2 h-2" /> : step.id}
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${currentStep >= step.id ? colors.text : colors.textMuted
                                        }`}>
                                        {step.name}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={cn(
                                            'flex-1 h-[1px] mx-4',
                                            currentStep > step.id
                                                ? isDark ? 'bg-white' : 'bg-black'
                                                : isDark ? 'bg-white/10' : 'bg-black/10'
                                        )}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <FormProvider {...methods}>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (currentStep < 4) {
                                        nextStep();
                                    } else {
                                        handleSubmit(onSubmit)(e);
                                    }
                                }}
                            >
                                <div className={`${colors.cardBg} border ${colors.border} p-12`}>
                                    <AnimatePresence mode="wait">
                                        {/* Step 1: Personal & Surgery */}
                                        {currentStep === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="space-y-12"
                                            >
                                                <div>
                                                    <h2 className={`text-2xl font-display font-medium ${colors.text} uppercase tracking-tight mb-2`}>
                                                        {steps[currentStep - 1].name}
                                                    </h2>
                                                    <p className={`text-[11px] font-black uppercase tracking-[0.2em] ${colors.textSecondary}`}>
                                                        Step {currentStep} of {steps.length} — Finalizing details
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    {renderInput('firstName', 'First Name', 'text', 'John')}
                                                    {renderInput('lastName', 'Last Name', 'text', 'Smith')}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    {renderInput('email', 'Email Address', 'email', 'john@example.com')}
                                                    {renderInput('phone', 'Phone Number', 'tel', '+44 7500 000000')}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    {renderInput('dentalPracticeName', 'Dental Practice Name', 'text', 'Academy Dental Clinic')}
                                                    {renderInput('surgeryAddress', 'Surgery Address', 'text', '123 Harley St, London')}
                                                </div>

                                                <div className="pt-4 border-t border-dashed" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                                                    <label className="flex items-start gap-3 cursor-pointer group">
                                                        <div className={cn(
                                                            'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all',
                                                            formValues.dataConsent
                                                                ? 'border-cyan-500 bg-cyan-500'
                                                                : colors.border
                                                        )}>
                                                            {formValues.dataConsent && <Check className="w-3.5 h-3.5 text-white" />}
                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            {...register('dataConsent')}
                                                            className="sr-only"
                                                        />
                                                        <span className={`text-sm ${colors.textSecondary} group-hover:${colors.text} transition-colors`}>
                                                            I consent to Lote Tree Dental Academy keeping my data for registration and future course updates.
                                                        </span>
                                                    </label>
                                                    {errors.dataConsent && (
                                                        <p className="mt-1 text-xs text-red-500">{errors.dataConsent.message}</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 2: Accommodation */}
                                        {currentStep === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div>
                                                    <h2 className={`text-xl font-bold ${colors.text} mb-1`}>
                                                        Accommodation Requirements
                                                    </h2>
                                                    <p className={`text-sm ${colors.textSecondary}`}>
                                                        Let us know if you need help with your stay
                                                    </p>
                                                </div>

                                                <div className="space-y-8">
                                                    <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${colors.text} mb-6`}>
                                                        Duration of Stay
                                                    </label>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                        {['1', '2', '3'].map((days) => (
                                                            <button
                                                                key={days}
                                                                type="button"
                                                                onClick={() => setValue('daysSelection', days as any)}
                                                                className={`p-10 border transition-all text-center group ${watch('daysSelection') === days
                                                                    ? isDark ? 'bg-white border-white' : 'bg-black border-black'
                                                                    : isDark ? 'border-white/10 text-white/40 hover:border-white' : 'border-black/10 text-black/40 hover:border-black'
                                                                    }`}
                                                            >
                                                                <span className={`block text-5xl font-display font-medium mb-4 ${watch('daysSelection') === days
                                                                    ? isDark ? 'text-black' : 'text-white'
                                                                    : colors.text
                                                                    }`}>
                                                                    {days}
                                                                </span>
                                                                <span className={`block text-sm font-bold uppercase tracking-wider ${watch('daysSelection') === days
                                                                    ? isDark ? 'text-black' : 'text-white'
                                                                    : colors.textSecondary
                                                                    }`}>
                                                                    {parseInt(days) === 1 ? 'Day' : 'Days'}
                                                                </span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <AnimatePresence>
                                                    {formValues.accommodationNeeded === 'yes' && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="space-y-6 overflow-hidden"
                                                        >
                                                            <div>
                                                                <label className={`block text-sm font-medium ${colors.text} mb-3`}>
                                                                    Accommodation Duration
                                                                </label>
                                                                <div className="grid grid-cols-3 gap-3">
                                                                    {['1', '2', '3'].map((d) => (
                                                                        <label
                                                                            key={d}
                                                                            className={cn(
                                                                                `flex items-center justify-center px-4 py-3 rounded-xl border cursor-pointer transition-all`,
                                                                                formValues.accommodationDays === d
                                                                                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-500 ring-1 ring-cyan-500'
                                                                                    : `${colors.border} ${colors.textSecondary} hover:border-cyan-500/50`
                                                                            )}
                                                                        >
                                                                            <input
                                                                                type="radio"
                                                                                {...register('accommodationDays')}
                                                                                value={d}
                                                                                className="sr-only"
                                                                            />
                                                                            <span className="font-bold">{d} {parseInt(d) === 1 ? 'Night' : 'Nights'}</span>
                                                                        </label>
                                                                    ))}
                                                                </div>
                                                                <p className={`mt-2 text-[10px] ${colors.textMuted} italic`}>* Each night adds £100 to your total registration.</p>
                                                            </div>
                                                            {renderInput('accommodationDetails', 'Stay Details (Dates)', 'text', 'Your Dates')}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {renderInput('dietaryRestrictions', 'Dietary Restrictions (Optional)', 'text', 'Halal, Vegetarian, gluten-free, etc.')}
                                                {renderInput('accessibilityNeeds', 'Accessibility Needs (Optional)', 'text', 'Wheelchair access, etc.')}
                                            </motion.div>
                                        )}

                                        {/* Step 3: Duration */}
                                        {currentStep === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div>
                                                    <h2 className={`text-xl font-bold ${colors.text} mb-1`}>
                                                        Select Your Duration
                                                    </h2>
                                                    <p className={`text-sm ${colors.textSecondary}`}>
                                                        Choose how many days you would like to participate
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        {[
                                                            { value: '1', label: '1 Day Foundation', desc: 'Core theory & materials' },
                                                            { value: '2', label: '2 Day Intensive', desc: 'Anterior focused mastery' },
                                                            { value: '3', label: 'Full 3 Day Course', desc: 'Complete masterclass' }
                                                        ].map((opt) => (
                                                            <label
                                                                key={opt.value}
                                                                className={cn(
                                                                    `flex flex-col p-6 rounded-2xl border cursor-pointer transition-all`,
                                                                    formValues.daysSelection === opt.value
                                                                        ? 'border-cyan-500 bg-cyan-500/10 ring-1 ring-cyan-500'
                                                                        : `${colors.border} ${colors.cardBg} hover:border-cyan-500/50 shadow-sm`
                                                                )}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    {...register('daysSelection')}
                                                                    value={opt.value}
                                                                    className="sr-only"
                                                                />
                                                                <span className={cn(
                                                                    "font-bold text-lg mb-1",
                                                                    formValues.daysSelection === opt.value ? colors.accent : colors.text
                                                                )}>{opt.label}</span>
                                                                <span className={cn("text-xs opacity-70", colors.textSecondary)}>{opt.desc}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>

                                            </motion.div>
                                        )}

                                        {/* Step 4: Review */}
                                        {currentStep === 4 && (
                                            <motion.div
                                                key="step4"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div>
                                                    <h2 className={`text-xl font-bold ${colors.text} mb-1`}>
                                                        Review Your Registration
                                                    </h2>
                                                    <p className={`text-sm ${colors.textSecondary}`}>
                                                        Please verify your information before proceeding to payment
                                                    </p>
                                                </div>

                                                {/* Personal Info Summary */}
                                                <div className={`${colors.bgAlt} rounded-2xl p-5 border ${colors.border}`}>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <User className={`w-5 h-5 ${colors.accent}`} />
                                                        <h3 className={`font-semibold ${colors.text}`}>Personal & Surgery</h3>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                        <div>
                                                            <span className={colors.textMuted}>Name</span>
                                                            <p className={colors.text}>{formValues.firstName} {formValues.lastName}</p>
                                                        </div>
                                                        <div>
                                                            <span className={colors.textMuted}>Email</span>
                                                            <p className={colors.text}>{formValues.email}</p>
                                                        </div>
                                                        <div>
                                                            <span className={colors.textMuted}>Practice</span>
                                                            <p className={colors.text}>{formValues.dentalPracticeName}</p>
                                                        </div>
                                                        <div>
                                                            <span className={colors.textMuted}>Surgery Address</span>
                                                            <p className={colors.text}>{formValues.surgeryAddress}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Accommodation Summary */}
                                                <div className={`${colors.bgAlt} rounded-2xl p-5 border ${colors.border}`}>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <MapPin className={`w-5 h-5 ${colors.accent}`} />
                                                        <h3 className={`font-semibold ${colors.text}`}>Accommodation & Needs</h3>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                        <div>
                                                            <span className={colors.textMuted}>Accommodation</span>
                                                            <p className={`${colors.text} capitalize`}>
                                                                {formValues.accommodationNeeded === 'yes' ? `${formValues.accommodationDays} Nights` : 'Not Needed'}
                                                            </p>
                                                        </div>
                                                        {formValues.accommodationNeeded === 'yes' && formValues.accommodationDetails && (
                                                            <div className="md:col-span-2">
                                                                <span className={colors.textMuted}>Stay Details</span>
                                                                <p className={colors.text}>{formValues.accommodationDetails}</p>
                                                            </div>
                                                        )}
                                                        <div>
                                                            <span className={colors.textMuted}>Dietary</span>
                                                            <p className={colors.text}>{formValues.dietaryRestrictions || 'None'}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Duration Summary */}
                                                <div className={`${colors.bgAlt} rounded-2xl p-5 border ${colors.border}`}>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <Calendar className={`w-5 h-5 ${colors.accent}`} />
                                                        <h3 className={`font-semibold ${colors.text}`}>Course Duration</h3>
                                                    </div>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <div>
                                                            <p className={`font-bold ${colors.text}`}>
                                                                {eventFromState?.title || upcomingEvent.name}
                                                            </p>
                                                            <p className={colors.textSecondary}>
                                                                {formValues.daysSelection} Day Registration
                                                            </p>
                                                        </div>
                                                        <span className={`text-xl font-bold ${colors.accent}`}>
                                                            {formatCurrency(pricing.total)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Navigation Buttons - Minimalist */}
                                    <div className="flex justify-between mt-12 pt-12 border-t border-black/5">
                                        <motion.button
                                            type="button"
                                            onClick={prevStep}
                                            whileHover={{ opacity: 0.7 }}
                                            className={cn(
                                                `flex items-center gap-4 px-10 py-5 font-black text-[10px] uppercase tracking-[0.3em] transition-all border`,
                                                currentStep === 1
                                                    ? isDark ? 'text-white/20 border-white/5 cursor-not-allowed' : 'text-black/20 border-black/5 cursor-not-allowed'
                                                    : isDark ? 'text-white border-white/10 hover:border-white' : 'text-black border-black/10 hover:border-black'
                                            )}
                                            disabled={currentStep === 1}
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            BACK
                                        </motion.button>

                                        {currentStep < 4 ? (
                                            <motion.button
                                                key="next-btn"
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    nextStep();
                                                }}
                                                whileHover={{ opacity: 0.8 }}
                                                className="px-12 py-5 font-black text-[10px] uppercase tracking-[0.3em] text-white bg-black flex items-center gap-4"
                                            >
                                                {currentStep === 3 ? 'REVIEW' : 'NEXT'}
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.button>
                                        ) : (
                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                whileHover={{ opacity: 0.8 }}
                                                className="px-12 py-5 font-black text-[10px] uppercase tracking-[0.3em] text-white bg-black flex items-center gap-4"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border border-white/30 border-t-white animate-spin" />
                                                        PROCESSING
                                                    </>
                                                ) : (
                                                    <>
                                                        PAY NOW
                                                        <ArrowRight className="w-4 h-4" />
                                                    </>
                                                )}
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </FormProvider>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className={`${colors.cardBg} rounded-3xl border ${colors.border} p-6 sticky top-24`}>
                            <h3 className={`font-bold ${colors.text} mb-6`}>Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className={colors.textSecondary}>Base Registration</span>
                                    <span className={colors.text}>{formatCurrency(pricing.basePrice)}</span>
                                </div>

                                {pricing.extras.map((extra) => (
                                    <div key={extra.name} className="flex justify-between text-sm">
                                        <span className={colors.textSecondary}>{extra.name}</span>
                                        <span className={colors.text}>{formatCurrency(extra.price)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={`pt-4 border-t ${colors.border}`}>
                                <div className="flex justify-between items-center">
                                    <span className={`font-bold ${colors.text}`}>Total</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                        {formatCurrency(pricing.total)}
                                    </span>
                                </div>
                            </div>

                            {/* Event Info */}
                            <div className={`mt-6 pt-6 border-t ${colors.border}`}>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className={`w-4 h-4 ${colors.accent}`} />
                                        <span className={`text-sm ${colors.textSecondary}`}>{eventFromState?.title || upcomingEvent.name}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className={`w-4 h-4 ${colors.accent}`} />
                                        <span className={`text-sm ${colors.textSecondary}`}>{eventFromState?.location || 'London, UK'}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar className={`w-4 h-4 ${colors.accent}`} />
                                        <span className={`text-sm ${colors.textSecondary}`}>{eventFromState?.shortDate || (upcomingEvent as any).date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
