'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import clinicData from '../../data.json';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
} as const

export default function ContactPage() {
  const { contactPage } = clinicData;
  const whatsappNumber = contactPage.contactInfo.phoneNumber?.replace(/[^\d]/g, '') || '1234567890'; // نظف الرقم

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // تنسيق الرسالة للواتساب
    const text = `*New Message from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* %0A${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // فتح واتساب في تبويب جديد
    window.open(whatsappUrl, '_blank');

    // إظهار رسالة النجاح
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // إخفاء الرسالة بعد 6 ثواني
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-30 dark:opacity-50"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {contactPage.title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-blue-100"
            >
              We're here to help you on your journey to recovery
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-16 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600 dark:text-green-400">
                      Thank you! Your message has been sent via WhatsApp. We'll reply soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition" placeholder="(123) 456-7890" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                        <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition">
                          <option value="">Select a subject</option>
                          <option value="appointment">Book an Appointment</option>
                          <option value="inquiry">General Inquiry</option>
                          <option value="billing">Billing Question</option>
                          <option value="insurance">Insurance Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition" placeholder="Tell us about your needs..."></textarea>
                    </div>

                    <button type="submit" className="w-full md:w-auto btn-primary inline-flex items-center justify-center px-8 py-3 text-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">📍</span></div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Address</h4>
                      <p className="text-gray-600 dark:text-gray-400">{contactPage.contactInfo.addressText}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">📞</span></div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Phone</h4>
                      <a href={`tel:${contactPage.contactInfo.phoneNumber}`} className="text-blue-600 dark:text-blue-400 hover:underline">{contactPage.contactInfo.phoneNumber}</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">✉️</span></div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Email</h4>
                      <a href={`mailto:${contactPage.contactInfo.emailAddress}`} className="text-blue-600 dark:text-blue-400 hover:underline">{contactPage.contactInfo.emailAddress}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours & Emergency Cards */}
              {/* ... (نفس الكود الأصلي مع dark classes إضافية لو عايز) */}
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{contactPage.map.title}</h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe src={contactPage.map.googleMapsEmbedUrl} width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}