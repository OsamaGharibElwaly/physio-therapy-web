import Link from 'next/link';

interface CTASectionProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonLink: string;
  background?: 'light' | 'dark';
}

export default function CTASection({
  headline,
  subheadline,
  buttonText,
  buttonLink,
  background = 'dark',
}: CTASectionProps) {
  const bgClass = background === 'dark' 
    ? 'bg-gradient-to-r from-blue-700 to-blue-900 text-white'
    : 'bg-gray-50 text-gray-900';
  
  return (
    <section className={`${bgClass} py-16`}>
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {headline}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg transition shadow-lg hover:shadow-xl bg-white text-blue-600 hover:bg-blue-50"
            >
              {buttonText}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold border-2 border-white rounded-lg transition hover:bg-white hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+10</div>
              <div className="opacity-90">Patients Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}