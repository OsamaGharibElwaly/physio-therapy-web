// app/page.tsx (أو HomePage component)

'use client';

import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import clinicData from '../data.json';

export default function HomePage() {
  const { homePage, services, testimonials, servicesPage } = clinicData;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <section className="relative">
        <Hero 
          headline={homePage.hero.headline}
          subheadline={homePage.hero.subheadline}
          image={homePage.hero.heroImage}
          primaryButtonText={clinicData.cta.primaryButtonText}
          primaryButtonLink={clinicData.cta.primaryButtonLink}
          secondaryButtonText={clinicData.cta.secondaryButtonText}
          secondaryButtonLink={clinicData.cta.secondaryButtonLink}
        />
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {homePage.servicesIntro.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {homePage.servicesIntro.subtitle}
            </p>
          </div>
          <ServicesGrid services={services.slice(0, 3)} />
          <div className="text-center mt-12">
            <a href="/services" className="inline-block btn-secondary">
              View All Services
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-white dark:bg-gray-900"
      >
        {/* About Section */}
        ...
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 bg-blue-50 dark:bg-blue-950"
      >
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Patient Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Hear from our satisfied patients
            </p>
          </div>
          <Testimonials testimonials={testimonials} />
        </div>
      </motion.section>

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