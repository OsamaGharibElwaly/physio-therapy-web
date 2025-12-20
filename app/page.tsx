'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import clinicData from '../data.json';

export default function HomePage() {
  const { homePage, services, testimonials, servicesPage, clinic } = clinicData;

  return (
    <>
      {/* Hero Section */}
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

      {/* Services Preview */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 bg-gray-50 dark:bg-gray-900"
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

      {/* About Preview */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 bg-white dark:bg-gray-800"
      >
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {clinic.shortBioTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {clinic.shortBioText}
              </p>
              <a href="/about" className="inline-block btn-primary">
                Learn More About Dr. Hesham
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={clinic.profileImages.homeAboutSection}
                alt="Dr. Marwan Hesham"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
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

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
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