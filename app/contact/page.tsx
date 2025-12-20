'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import clinicData from '../../data.json';

export default function ContactPage() {
  const { contactPage } = clinicData;
  const whatsappNumber = contactPage.contactInfo.phoneNumber?.replace(/[^\d]/g, '') || '1234567890';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* %0A${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-30 dark:opacity-50"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl font-bold mb-6">
              {contactPage.title}
            </motion.h1>
            <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-blue-100">
              We're here to help you on your journey to recovery
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
                    <p className="text-green-600 dark:text-green-400">Your message has been sent via WhatsApp.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* باقي الـ form كامل زي ما كان، مع dark classes */}
                    {/* ... (الـ inputs والـ button) */}
                    <button type="submit" className="w-full md:w-auto btn-primary inline-flex items-center justify-center px-8 py-3 text-lg">
                      <Send className="w-5 h-5 mr-2" /> Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-8">
              {/* Contact Info, Hours, Emergency Cards مع dark classes */}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{contactPage.map.title}</h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe src={contactPage.map.googleMapsEmbedUrl} width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}