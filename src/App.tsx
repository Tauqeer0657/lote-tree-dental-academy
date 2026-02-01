import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CinematicNavbar from './components/CinematicNavbar';
import CinematicFooter from './components/CinematicFooter';
import ProtectedRoute from './components/ProtectedRoute';
import Dentists from './pages/Dentists';
import Success from './pages/Success';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Payment from './pages/Payment';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import { ThemeProvider } from './contexts/ThemeContext';
import {
  HomeSample7,
  HomeSample7a,
  HomeSample7b,
  HomeSample7c,
  HomeSample7d,
  HomeSample7e,
  HomeSample7f,
  HomeSample7g,
  HomeSample7h,
  HomeSample7i,
  HomeSample7j
} from './pages/home-samples';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Homepage Samples - No Navbar/Footer for clean preview */}
          <Route path="/sample-7" element={<HomeSample7 />} />
          <Route path="/sample-7a" element={<HomeSample7a />} />
          <Route path="/sample-7b" element={<HomeSample7b />} />
          <Route path="/sample-7c" element={<HomeSample7c />} />
          <Route path="/sample-7d" element={<HomeSample7d />} />
          <Route path="/sample-7e" element={<HomeSample7e />} />
          <Route path="/sample-7f" element={<HomeSample7f />} />
          <Route path="/sample-7g" element={<HomeSample7g />} />
          <Route path="/sample-7h" element={<HomeSample7h />} />
          <Route path="/sample-7i" element={<HomeSample7i />} />
          <Route path="/sample-7j" element={<HomeSample7j />} />

          {/* Main App Routes with Navbar/Footer */}
          <Route path="/*" element={
            <div className="min-h-screen flex flex-col">
              <CinematicNavbar />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<HomeSample7 />} />
                  <Route path="/dentists" element={<Dentists />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/events/:eventSlug" element={<EventDetail />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin" element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                </Routes>
              </div>
              <CinematicFooter />
            </div>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
