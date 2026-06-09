import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to book my spa treatments in advance?",
    answer: "Yes, we highly recommend booking in advance to ensure your preferred time slot and therapist are available. Weekend slots fill up quickly."
  },
  {
    question: "What should I wear during my spa visit?",
    answer: "We provide luxury robes, slippers, and disposable undergarments. For most massage therapies, you will undress to your comfort level while remaining professionally draped throughout the treatment."
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment without charge. Cancellations within 24 hours may incur a 50% fee."
  },
  {
    question: "What products do you use for treatments?",
    answer: "We use premium, organic, cruelty-free botanical oils and luxury marine extracts. All skincare products are dermatologically tested and suitable for sensitive skin."
  },
  {
    question: "Are your therapists certified?",
    answer: "Absolutely. All of our therapists are fully licensed, certified, and trained in both traditional therapies and modern medical-grade wellness treatments."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="glass-card overflow-hidden transition-all duration-300 border border-aqua-100/10 dark:border-white/5"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left md:p-6 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="text-aqua-400 flex-shrink-0" size={20} />
                <span className="font-playfair text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 dark:text-gray-500"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-sm md:text-base text-gray-600 dark:text-gray-300 border-t border-aqua-50/50 dark:border-white/5 mt-[-1px]">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
