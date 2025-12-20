import { Service } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  detailed?: boolean;
}

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Icon/Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        {service.icon ? (
          <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
        ) : service.image ? (
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${service.image})` }}
          ></div>
        ) : (
          <div className="text-5xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
            ⚕️
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {service.shortDescription}
        </p>
        
        {detailed && service.longDescription && (
          <p className="text-gray-500 text-sm mb-4">
            {service.longDescription}
          </p>
        )}
        
        <div className="flex items-center justify-between mt-6">
          <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition">
            Learn more
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          
          <button className="btn-primary text-sm py-2 px-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}