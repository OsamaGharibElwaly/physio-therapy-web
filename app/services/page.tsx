'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '../components/ServicesGrid';
import CTASection from '../components/CTASection';
import clinicData from '../../data.json';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,  // مهم جدًا
    } as const,  // مهم جدًا هنا كمان
  } as const,
} as const;

export default function ServicesPage() {
  const { servicesPage, services } = clinicData;

  return (
    <>
      {/* Services Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-40 dark:opacity-50"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {servicesPage.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl"
            >
              {servicesPage.heroSubtitle}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* All Services */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-16 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom section-padding">
          <ServicesGrid services={services} detailed={true} />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <CTASection 
          headline={servicesPage.ctaSection.headline}
          subheadline={servicesPage.ctaSection.subheadline}
          buttonText={servicesPage.ctaSection.buttonText}
          buttonLink={servicesPage.ctaSection.buttonLink}
        />
      </motion.div>
    </>
  );
}