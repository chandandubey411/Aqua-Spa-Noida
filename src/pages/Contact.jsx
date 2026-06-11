import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import PageBanner from '../components/PageBanner';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error('Please fill in all required fields.', {
        style: { borderRadius: '12px', background: '#023E8A', color: '#fff' }
      });
      return;
    }

    setSubmitted(true);
    toast.success('Your message has been sent successfully!', {
      style: { borderRadius: '12px', background: '#023E8A', color: '#fff' }
    });
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Contact Our Sanctuary"
        subtitle="Get in Touch"
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="container-max page-padding mt-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-luxury border border-aqua-100/10 space-y-8"
            >
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Sanctuary Details</h3>
              <div className="luxury-divider" style={{ justifyContent: 'flex-start' }} />

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-aqua-50 dark:bg-aqua-950/40 text-aqua-400 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5 className="font-playfair text-base font-bold text-gray-900 dark:text-white">Address</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-poppins leading-relaxed">
                      Shop No-27, 1st floor, 14th Ave, Gaur City 2, Greater Noida, Ghaziabad, Uttar Pradesh 201009
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-aqua-50 dark:bg-aqua-950/40 text-aqua-400 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h5 className="font-playfair text-base font-bold text-gray-900 dark:text-white">Phone Support</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-poppins">
                      <a href="tel:+919910992067" className="hover:text-aqua-400 transition-colors">+91 99109 92067</a>
                    </p>
                  </div>
                </div>

                {/* Mailbox */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-aqua-50 dark:bg-aqua-950/40 text-aqua-400 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h5 className="font-playfair text-base font-bold text-gray-900 dark:text-white">Email Inquiries</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-poppins">
                      bookings@aquaspa.com<br />
                      support@aquaspa.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-aqua-50 dark:bg-aqua-950/40 text-aqua-400 flex items-center justify-center flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h5 className="font-playfair text-base font-bold text-gray-900 dark:text-white">Opening Hours</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-poppins">
                      Mon - Fri: 8:00 AM - 9:00 PM<br />
                      Sat - Sun: 7:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Contact Submission Form */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-luxury border border-aqua-100/10 space-y-8"
            >
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h3>
              <div className="luxury-divider" style={{ justifyContent: 'flex-start' }} />

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-8 rounded-3xl bg-aqua-50/50 dark:bg-aqua-950/20 border border-gold-400/30 text-center space-y-4 max-w-md mx-auto"
                >
                  <CheckCircle2 size={48} className="text-gold-400 mx-auto animate-bounce" />
                  <h4 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Message Dispatched</h4>
                  <p className="font-poppins text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Thank you. We have received your inquiry and our guest relations concierge will get back to you within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 rounded-xl bg-spa-light dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-transparent focus:outline-none focus:border-aqua-300 transition-all text-sm"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-5 py-3.5 rounded-xl bg-spa-light dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-transparent focus:outline-none focus:border-aqua-300 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="e.g. Wedding Packages, Custom Event"
                      className="w-full px-5 py-3.5 rounded-xl bg-spa-light dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-transparent focus:outline-none focus:border-aqua-300 transition-all text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Write your wellness inquiries here..."
                      className="w-full px-5 py-4 rounded-xl bg-spa-light dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-transparent focus:outline-none focus:border-aqua-300 transition-all text-sm"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

        {/* Embedded Google Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-96 w-full rounded-3xl overflow-hidden shadow-luxury border border-aqua-100/10"
        >
          {/* Elegant mock maps image frame */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 font-playfair select-none p-6 text-center">
            <MapPin size={48} className="text-aqua-400 animate-bounce mb-3" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Aqua Spa Gaur City 2 Location Map</h4>
            <p className="font-poppins text-xs text-gray-500 max-w-sm mt-1">
              Shop No-27, 1st floor, 14th Ave, Gaur City 2, Greater Noida, Ghaziabad, Uttar Pradesh 201009. Click to view on Google Maps.
            </p>
          </div>
          {/* Real Map iframe link placeholder */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.046317208166!2d77.41724767528353!3d28.628587375667554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee512a32ec69%3A0x6b42b6a9081e779a!2s14th%20Avenue%2C%20Gaur%20City%202!5e0!3m2!1sen!2sin!4v1717950000000!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0 opacity-80 dark:opacity-60"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Gaur City 2"
          />
        </motion.div>

      </div>
    </div>
  );
}
