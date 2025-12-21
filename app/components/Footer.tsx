import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  data: {
    tagline: string;
    quickLinks: Array<{ name: string; path: string }>;
    address: string;
    phone: string;
    email: string;
    social: {
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
    };
    copyrightText: string;
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dr. Marwan Hesham</h3>
            <p className="text-gray-300 mb-6">
              {data.tagline}
            </p>
            <div className="flex space-x-4">
              {data.social.facebook && (
                <a 
                  href={data.social.facebook} 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {data.social.twitter && (
                <a 
                  href={data.social.twitter} 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {data.social.instagram && (
                <a 
                  href={data.social.instagram} 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {data.social.linkedin && (
                <a 
                  href={data.social.linkedin} 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {data.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                <span className="text-gray-300">{data.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a 
                  href={`tel:${data.phone}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {data.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a 
                  href={`mailto:${data.email}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {data.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Sunday - Thursday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{data.copyrightText}</p>
          <p className="text-sm mt-2">
            Designed with ❤️ for better health and recovery
          </p>
        </div>
      </div>
    </footer>
  );
}