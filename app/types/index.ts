export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface ContactInfo {
  addressLabel: string;
  addressText: string;
  phoneLabel: string;
  phoneNumber: string;
  emailLabel: string;
  emailAddress: string;
  hoursLabel: string;
  hoursText: string;
}

export interface ClinicData {
  clinic: {
    name: string;
    shortBioTitle: string;
    shortBioText: string;
    profileImages: {
      aboutHero: string;
      homeAboutSection: string;
    };
  };
  cta: {
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
  services: Service[];
  testimonials: Testimonial[];
  footer: {
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