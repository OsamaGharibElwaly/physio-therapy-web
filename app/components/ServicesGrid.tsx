import ServiceCard from './ServiceCard';
import { Service } from '../types';

interface ServicesGridProps {
  services: Service[];
  detailed?: boolean;
}

export default function ServicesGrid({ services, detailed = false }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          detailed={detailed}
        />
      ))}
    </div>
  );
}