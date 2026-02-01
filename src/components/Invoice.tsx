import { formatCurrency, formatDate } from '../lib/utils';

interface InvoiceProps {
    registration: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        dentalPracticeName?: string;
        surgeryAddress?: string;
    };
    pricing: {
        basePrice: number;
        extras: { name: string; price: number }[];
        total: number;
    };
    paymentConfirmation: {
        last4: string;
        amount: number;
        date: string;
    };
    confirmationNumber: string;
}

export default function Invoice({ registration, pricing, paymentConfirmation, confirmationNumber }: InvoiceProps) {
    return (
        <div id="invoice-content" className="p-8 bg-white text-slate-900 mx-auto max-w-4xl border border-slate-200">
            {/* Header */}
            <div className="flex justify-between items-start border-b-2 border-slate-100 pb-8 mb-8">
                <div>
                    <img src="/logo.png" alt="Dental Academy" className="h-20 mb-4" />
                    <h1 className="text-3xl font-bold text-slate-900">TAX INVOICE</h1>
                </div>
                <div className="text-right text-sm">
                    <p className="font-bold text-slate-800">Lote Tree Dental Academy</p>
                    <p>123 Academy Road</p>
                    <p>London, UK</p>
                    <p>contact@lotetree.academy</p>
                </div>
            </div>

            {/* Invoice Info */}
            <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                    <h3 className="text-sm font-bold uppercase text-slate-400 mb-2">Billed To</h3>
                    <p className="font-bold text-lg">{registration.firstName} {registration.lastName}</p>
                    <p>{registration.dentalPracticeName || 'N/A'}</p>
                    <p>{registration.surgeryAddress || 'N/A'}</p>
                    <p>{registration.email}</p>
                    <p>{registration.phone}</p>
                </div>
                <div className="text-right">
                    <div className="mb-4">
                        <h3 className="text-sm font-bold uppercase text-slate-400 mb-1">Invoice Number</h3>
                        <p className="font-mono">{confirmationNumber}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase text-slate-400 mb-1">Date Paid</h3>
                        <p>{formatDate(paymentConfirmation.date)}</p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <table className="w-full mb-12 border-collapse">
                <thead>
                    <tr className="border-b-2 border-slate-100 text-left text-sm uppercase text-slate-500">
                        <th className="py-4 font-bold">Description</th>
                        <th className="py-4 font-bold text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-100">
                        <td className="py-4">
                            <p className="font-bold">Base Registration</p>
                            <p className="text-sm text-slate-500">Masterclass Admission & Materials</p>
                        </td>
                        <td className="py-4 text-right font-medium">{formatCurrency(pricing.basePrice)}</td>
                    </tr>
                    {pricing.extras.map((extra, idx) => (
                        <tr key={idx} className="border-b border-slate-100">
                            <td className="py-4">
                                <p className="font-bold">{extra.name}</p>
                            </td>
                            <td className="py-4 text-right font-medium">{formatCurrency(extra.price)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="py-6 font-bold text-xl">Total Paid</td>
                        <td className="py-6 text-right font-bold text-xl text-cyan-600">{formatCurrency(pricing.total)}</td>
                    </tr>
                </tfoot>
            </table>

            {/* Payment Details */}
            <div className="p-6 bg-slate-50 rounded-2xl mb-12 flex justify-between items-center text-sm">
                <div>
                    <p className="font-bold text-slate-700">Payment Method</p>
                    <p>Card ending in •••• {paymentConfirmation.last4}</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-slate-700">Payment Status</p>
                    <p className="text-green-600 font-bold">PAID</p>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center border-t border-slate-100 pt-8 text-sm text-slate-400">
                <p className="mb-2">Thank you for registering with Lote Tree Dental Academy.</p>
                <p>This is a computer-generated invoice and does not require a signature.</p>
            </div>
        </div>
    );
}
