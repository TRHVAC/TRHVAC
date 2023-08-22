// TODO: Need to check proper link
export const TR_GOOGLE_LINK =
  'https://www.google.com/maps/place/L3P+6Y5+%EC%98%A8%ED%83%80%EB%A6%AC%EC%98%A4+%EB%A7%88%ED%81%AC%ED%97%98/@43.8831285,-79.2672715,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d63d214740bb:0x5a68fbad18e633!8m2!3d43.8831802!4d-79.2643196!16s%2Fg%2F1tfmpcmm?entry=ttu';

// TODO: Need to check proper email address
export const TR_EMAIL_ADDRESS = 'mailto:recipient@example.com';

export const TR_INSTAGRAM_LINK = 'https://www.instagram.com/trhvac/';

export const TR_TEL_NUMBER = 'tel:647-522-5652';

export const HeroBodyContents: Record<
  THeroImageCategory,
  {
    intro?: string;
    title: string;
    subTitle: string;
  }
> = {
  HOME: {
    intro: 'HEATING & COOLING SERVICES',
    title: 'Keep Your Cool With us',
    subTitle: `We offer affordable price.${'\n'}Please contact us for more information.`,
  },
  COOLING: {
    title: 'Cooling Service',
    subTitle: `Installation | Replacement | Repair${'\n'}Maintenance | Protection`,
  },
  HEATING: {
    title: 'Heating Service',
    subTitle: 'Installation | Replacement | Repair | Maintenance',
  },
  IAQ: {
    title: `Indoor Air Quality${'\n'}(IAQ) Products`,
    subTitle: 'Installation | Replacement | Repair | Maintenance',
  },
  WATERHEATER: {
    title: 'Water Heaters',
    subTitle: 'Installation | Replacement | Repair | Maintenance',
  },
  BOOKING: {
    title: 'Booking',
    subTitle: 'Heating | Coooling | Water Heaters | IAQ Products',
  },
};

export type THeroImageCategory =
  | 'HOME'
  | 'COOLING'
  | 'HEATING'
  | 'IAQ'
  | 'WATERHEATER'
  | 'BOOKING';
