import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
        >
          {/* Quote Icon */}
          <div className="mb-4">
            <Quote className="w-8 h-8 text-blue-100" />
          </div>
          
          {/* Rating */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Testimonial Text */}
          <p className="text-gray-700 italic mb-6">
            "{testimonial.text}"
          </p>
          
          {/* Author */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-500">Patient</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}