import React, { ReactNode } from 'react';

import ServiceHeating from '@public/home/service-heating.jpg';
import ServiceCooling from '@public/home/service-cooling.jpg';
import ServiceIAQ from '@public/home/service-iaq.jpg';
import ServiceWaterHeater from '@public/home/service-water-heater.jpg';
import { ACIcon } from '@components/icons/home/ACIcon';
import { BoilerIcon } from '@components/icons/home/BoilerIcon';
import { FurnaceIcon } from '@components/icons/home/FurnaceIcon';
import { GasLineIcon } from '@components/icons/home/GasLineIcon';
import { MaintenanceIcon } from '@components/icons/home/MaintenanceIcon';
import { TanklessIcon } from '@components/icons/home/TanklessIcon';
import { MapIcon } from '@components/icons/MapIcon';
import { MailIcon } from '@components/icons/MailIcon';
import { InstagramIcon } from '@components/icons/InstagramIcon';
import { PhoneIcon } from '@components/icons/PhoneIcon';

export const TR_GOOGLE_REVIEW_LINK =
  'https://www.google.com/maps/place/TR+Heating+and+Cooling/@43.7978857,-79.4221016,17z/data=!4m8!3m7!1s0x882b2d1df0cb1bbb:0x93d9b238c86d3b1a!8m2!3d43.7978819!4d-79.4195267!9m1!1b1!16s%2Fg%2F11qhjgfkq6?entry=ttu';

export const Instagram_Link = 'https://www.instagram.com/trhvac/';

export const TR_CONTACT_INFO: {
  [key: string]: {
    title: string;
    ref: string;
    icon: (color?: string, width?: number, height?: number) => JSX.Element;
  };
} = {
  Address: {
    title: 'GTA Area',
    ref: 'https://www.google.com/maps/place/TR+Heating+and+Cooling/@43.7978814,-79.429805,15z/data=!3m1!4b1!4m6!3m5!1s0x882b2d1df0cb1bbb:0x93d9b238c86d3b1a!8m2!3d43.7978819!4d-79.4195267!16s%2Fg%2F11qhjgfkq6?entry=ttu', // TODO: Need to check proper link
    icon: (color) => MapIcon(color),
  },
  Phone: {
    title: '(647) 522 - 5652',
    ref: 'tel:647-522-5652',
    icon: (color, width, height) => PhoneIcon(color, width, height),
  },
  Email: {
    title: 'trhvac@hotmail.com',
    ref: 'mailto:trhvac@hotmail.com',
    icon: () => MailIcon(),
  },
  Instagram: {
    title: 'trhvac',
    ref: 'https://www.instagram.com/trhvac/',
    icon: () => InstagramIcon(),
  },
};

export const TR_SERVICE_ITEMS = [
  { title: 'Heating', image: ServiceHeating, queryName: 'heating' },
  { title: 'Cooling', image: ServiceCooling, queryName: 'cooling' },
  { title: 'Water Heaters', image: ServiceWaterHeater, queryName: 'waterheater' },
  { title: 'Indoor Air Quality Products', image: ServiceIAQ, queryName: 'iaq' },
];

export const TR_SPECIALTY_ITEMS = [
  { title: 'A/C', icon: ACIcon },
  { title: 'Boiler', icon: BoilerIcon },
  { title: 'Tankless', icon: TanklessIcon },
  { title: 'Gas Line', icon: GasLineIcon },
  { title: 'Furnace', icon: FurnaceIcon },
  { title: 'Maintenance', icon: MaintenanceIcon },
];

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
