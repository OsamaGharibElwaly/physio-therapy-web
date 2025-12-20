'use client';

import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import clinicData from '../../data.json';
import Image from 'next/image';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
} as const;

export default function AboutPage() {
  const { aboutPage, clinic, servicesPage } = clinicData;

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {clinic.shortBioTitle}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {clinic.shortBioText}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Biography Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-16 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Doctor Image - رجعت الصورة زي الأول */}
            <div className="lg:col-span-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
  <Image
    src="/images/about/marwan-image.png"
    alt="Dr. Marwan Hesham - Lead Physiotherapist & Founder"
    fill
    className="contain"
    priority // عشان تتحمل بسرعة في الـ About page
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
    <h3 className="text-2xl font-bold text-white">Dr. Marwan Hesham</h3>
    <p className="text-blue-100">Lead Physiotherapist & Founder</p>
  </div>
</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">Dr. Marwan Hesham</h3>
                  <p className="text-blue-100">Lead Physiotherapist & Founder</p>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Areas of Expertise</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Orthopedic Rehabilitation
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Sports Injury Management
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Manual Therapy
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Neurological Rehabilitation
                  </li>
                </ul>
              </div>
            </div>

            {/* Biography Content - الكلام كله رجع */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {aboutPage.biographyTitle}
                </h2>
                {aboutPage.biographyParagraphs.map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 dark:border-blue-500 p-6 mb-12 rounded-r-lg">
                <div className="text-2xl text-gray-800 dark:text-gray-200 italic mb-4">
                  "{aboutPage.quote.text}"
                </div>
                <div className="font-bold text-blue-700 dark:text-blue-400">
                  — {aboutPage.quote.authorName}
                </div>
              </div>

              {/* Philosophy */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {aboutPage.philosophy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  {aboutPage.philosophy.text}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-100 dark:border-gray-700">
                    <div className="text-3xl mb-4">🎯</div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Our Mission</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      To provide exceptional, evidence-based physiotherapy that empowers patients to achieve their highest level of function and wellness.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-100 dark:border-gray-700">
                    <div className="text-3xl mb-4">💙</div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Our Values</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Compassion, excellence, integrity, and patient-centered care guide everything we do at our clinic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
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