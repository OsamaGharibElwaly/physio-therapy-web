import clinicData from '../../data.json';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const;

export const CLINIC_NAME = clinicData.clinic.name;

export const CONTACT_INFO = clinicData.contactPage.contactInfo;

export const SOCIAL_LINKS = clinicData.footer.social;

export const OPENING_HOURS = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
] as const;