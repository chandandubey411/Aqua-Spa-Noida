import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import PageBanner from '../components/PageBanner';
import { services } from '../data/services';
import { team } from '../data/team';

const timeSlots = [
  '09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
];

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guestDetails, setGuestDetails] = useState({ name: '', email: '', phone: '', notes: '' });
  const [bookingRef, setBookingRef] = useState('');

  // Auto-set first service if available
  useEffect(() => {
    if (services.length > 0 && !selectedService) {
      setSelectedService(services[0]);
    }
    if (team.length > 0 && !selectedTherapist) {
      setSelectedTherapist(team[0]);
    }
  }, []);

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      toast.error('Please select a treatment.');
      return;
    }
    if (step === 2) {
      if (!selectedTherapist) {
        toast.error('Please choose your therapist.');
        return;
      }
      if (!selectedDate) {
        toast.error('Please pick a date.');
        return;
      }
      if (!selectedTime) {
        toast.error('Please select a time slot.');
        return;
      }
    }
    if (step === 3) {
      if (!guestDetails.name || !guestDetails.email || !guestDetails.phone) {
        toast.error('Please fill in name, email, and phone.');
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const ref = 'AQ-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    toast.success('👑 Royal Appointment Confirmed!', {
      style: { borderRadius: '12px', background: '#023E8A', color: '#fff' }
    });
    setStep(4);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedService(services[0]);
    setSelectedTherapist(team[0]);
    setSelectedDate('');
    setSelectedTime('');
    setGuestDetails({ name: '', email: '', phone: '', notes: '' });
    setBookingRef('');
  };

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Reserve Your Sanctuary Slot"
        subtitle="Relax. Rejuvenate. Renew."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
        breadcrumbs={[{ label: 'Appointment Booking' }]}
      />

      <div className="container-max page-padding mt-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress Indicators */}
          {step < 4 && (
            <div className="flex justify-between items-center mb-12 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-luxury border border-aqua-100/10 max-w-2xl mx-auto">
              {[
                { number: 1, label: 'Treatment' },
                { number: 2, label: 'Schedule' },
                { number: 3, label: 'Details' }
              ].map((s) => (
                <div key={s.number} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      step >= s.number
                        ? 'bg-aqua-400 text-white shadow-md'
                        : 'bg-spa-light text-gray-400 dark:bg-gray-800'
                    }`}
                  >
                    {s.number}
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider font-poppins hidden sm:inline ${
                      step >= s.number ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                    }`}
                  >
                    {s.label}
                  </span>
                  {s.number < 3 && <ChevronRight size={14} className="text-gray-300 hidden sm:inline" />}
                </div>
              ))}
            </div>
          )}

          {/* Booking Cards array container */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-luxury border border-aqua-100/10 overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Select Treatment */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Choose Your Treatment</h3>
                    <p className="text-xs text-gray-500 font-poppins">Select from our signature restorative menu</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2">
                    {services.map((service) => {
                      const isSelected = selectedService?.id === service.id;
                      return (
                        <div
                          key={service.id}
                          onClick={() => setSelectedService(service)}
                          className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                            isSelected
                              ? 'border-aqua-400 bg-aqua-50/20 dark:bg-aqua-950/20'
                              : 'border-gray-100 dark:border-gray-800 hover:border-aqua-100'
                          }`}
                        >
                          <img src={service.image} alt={service.title} className="w-16 h-16 rounded-xl object-cover" />
                          <div className="flex-1 space-y-1 text-left">
                            <span className="text-[10px] text-aqua-400 font-semibold uppercase tracking-wider">{service.category}</span>
                            <h4 className="font-playfair text-base font-bold text-gray-900 dark:text-white leading-tight">{service.title}</h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500 font-poppins">
                              <span>⏱ {service.duration}</span>
                              <span className="font-bold text-gold-500">${service.price}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button onClick={handleNext} className="btn-primary">
                      <span>Select Schedule</span> <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Choose Therapist & Schedule */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 space-y-8"
                >
                  <div className="space-y-1">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Select Specialist & Schedule</h3>
                    <p className="text-xs text-gray-500 font-poppins">Choose your preferred therapist and date</p>
                  </div>

                  <div className="space-y-6">
                    {/* Therapist picker */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Choose Specialist</label>
                      <div className="flex gap-4 overflow-x-auto pb-2 pr-2">
                        {team.map((t) => {
                          const isSelected = selectedTherapist?.id === t.id;
                          return (
                            <div
                              key={t.id}
                              onClick={() => setSelectedTherapist(t)}
                              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-center flex-shrink-0 w-36 ${
                                isSelected
                                  ? 'border-aqua-400 bg-aqua-50/20 dark:bg-aqua-950/20'
                                  : 'border-gray-100 dark:border-gray-800 hover:border-aqua-100'
                              }`}
                            >
                              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover mx-auto" />
                              <h5 className="font-playfair text-sm font-bold text-gray-900 dark:text-white mt-2 leading-tight">{t.name}</h5>
                              <p className="text-[10px] text-gray-400 font-poppins mt-0.5 line-clamp-1">{t.role}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date selection */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar size={14} /> Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-5 py-3 rounded-xl bg-spa-light dark:bg-gray-800 border-2 border-transparent focus:outline-none focus:border-aqua-300 transition-colors text-sm text-gray-900 dark:text-white"
                        />
                      </div>

                      {/* Time selection */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Clock size={14} /> Preferred Time Slot
                        </label>
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                                selectedTime === time
                                  ? 'bg-aqua-400 text-white shadow-md'
                                  : 'bg-spa-light hover:bg-aqua-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button onClick={handleBack} className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-700">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <button onClick={handleNext} className="btn-primary">
                      <span>Add Details</span> <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Guest Details & Summary */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 space-y-8"
                >
                  <div className="space-y-1">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Guest Information</h3>
                    <p className="text-xs text-gray-500 font-poppins">Provide your details to complete scheduling</p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={guestDetails.name}
                          onChange={(e) => setGuestDetails(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="John Doe"
                          className="w-full px-5 py-3 rounded-xl bg-spa-light dark:bg-gray-800 text-sm focus:outline-none border-2 border-transparent focus:border-aqua-300 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={guestDetails.email}
                          onChange={(e) => setGuestDetails(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="john@example.com"
                          className="w-full px-5 py-3 rounded-xl bg-spa-light dark:bg-gray-800 text-sm focus:outline-none border-2 border-transparent focus:border-aqua-300 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        value={guestDetails.phone}
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 99109 92067"
                        className="w-full px-5 py-3 rounded-xl bg-spa-light dark:bg-gray-800 text-sm focus:outline-none border-2 border-transparent focus:border-aqua-300 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Special Requests / Notes</label>
                      <textarea
                        rows={3}
                        value={guestDetails.notes}
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="Allergies, pressure preference, or requests..."
                        className="w-full px-5 py-3 rounded-xl bg-spa-light dark:bg-gray-800 text-sm focus:outline-none border-2 border-transparent focus:border-aqua-300 text-gray-900 dark:text-white"
                      />
                    </div>

                    {/* Summary list */}
                    <div className="p-5 rounded-2xl bg-aqua-50/50 dark:bg-aqua-950/20 border border-aqua-100/10 space-y-3 font-poppins text-sm text-gray-600 dark:text-gray-300 text-left">
                      <h4 className="font-playfair text-base font-bold text-gray-900 dark:text-white mb-2">Booking Summary</h4>
                      <div className="flex justify-between">
                        <span>Treatment:</span>
                        <strong className="text-gray-900 dark:text-white">{selectedService?.title}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Specialist:</span>
                        <strong className="text-gray-900 dark:text-white">{selectedTherapist?.name}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <strong className="text-gray-900 dark:text-white">{selectedDate} at {selectedTime}</strong>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 dark:border-gray-800 pt-2 font-bold text-base text-gray-900 dark:text-white">
                        <span>Total Price:</span>
                        <span className="text-gold-500">${selectedService?.price}</span>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <button type="button" onClick={handleBack} className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-700">
                        <ChevronLeft size={16} /> Back
                      </button>
                      <button type="submit" className="btn-gold shadow-md">
                        <span>Confirm Appointment</span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* STEP 4: Success Message Screen */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center space-y-6"
                >
                  <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="absolute inset-0 bg-aqua-100 dark:bg-aqua-950/40 rounded-full"
                    />
                    <CheckCircle2 size={56} className="text-aqua-400 relative z-10 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white">Appointment Confirmed</h3>
                    <p className="font-poppins text-xs uppercase tracking-[0.2em] text-gold-500">Your space is locked</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-spa-light dark:bg-gray-800 max-w-md mx-auto text-left space-y-4 font-poppins text-sm border border-gray-150 dark:border-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-xs text-gray-400">Booking Reference</span>
                      <strong className="text-aqua-500 text-base font-mono">{bookingRef}</strong>
                    </div>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <div>
                        <span>Guest Name:</span>
                        <strong className="float-right text-gray-950 dark:text-white">{guestDetails.name}</strong>
                      </div>
                      <div>
                        <span>Treatment Selected:</span>
                        <strong className="float-right text-gray-950 dark:text-white">{selectedService?.title}</strong>
                      </div>
                      <div>
                        <span>Therapist assigned:</span>
                        <strong className="float-right text-gray-950 dark:text-white">{selectedTherapist?.name}</strong>
                      </div>
                      <div>
                        <span>Assigned Slot:</span>
                        <strong className="float-right text-gray-950 dark:text-white">{selectedDate} ({selectedTime})</strong>
                      </div>
                    </div>
                  </div>

                  <p className="font-poppins text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                    A confirmation email and SMS with appointment details, directions, and health forms has been dispatched to {guestDetails.email}.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <button onClick={resetBooking} className="btn-primary text-xs px-6 py-3">
                      Book Another Slot
                    </button>
                    <Link to="/" className="btn-secondary text-xs px-6 py-3 border-2 border-aqua-400 text-aqua-400 hover:bg-aqua-400 hover:text-white dark:border-gray-800">
                      Go to Home
                    </Link>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
