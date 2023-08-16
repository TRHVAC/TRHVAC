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
