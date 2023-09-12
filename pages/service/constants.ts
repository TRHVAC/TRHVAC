import { StaticImageData } from 'next/image';

import { THeroImageCategory } from '@utils/constants';

import AirConditionerRepair from '@public/services/cooling/Air-Conditioner-Repair.jpg';
import AirConditionerReplacement from '@public/services/cooling/Air-Conditioner-Replacement.jpg';
import DuctlessHeatPump from '@public/services/cooling/Ductless-Heat-Pump.jpg';

import AirHandler from '@public/services/heating/Air-Handler.jpg';
import BoilerReplacement from '@public/services/heating/Boiler-Replacement.jpg';
import HCentralHeatPump from '@public/services/heating/Central-Heat-Pump.jpg';
import HDuctlessHeatPump from '@public/services/heating/Ductless-Heat-Pump.jpg';
import FurnaceAndBoilerRepair from '@public/services/heating/Furnace-And-Boiler-Repair.jpg';
import FurnaceMaintenance from '@public/services/heating/Furnace-Maintenance.jpg';
import FurnaceReplacement from '@public/services/heating/Furnace-Replacement.jpg';

import AirPurificationSystem from '@public/services/iaq/Air-Purification-System.jpg';
import HeatRecoveryVentilator from '@public/services/iaq/Heat-Recovery-Ventilator.jpg';
import Humidifier from '@public/services/iaq/Humidifier.jpg';
import UVLight from '@public/services/iaq/UV-Light.jpg';

import TanklessWaterHeater from '@public/services/waterHeater/Tankless-Water-Heater.jpg';
import WaterHeaterRepair from '@public/services/waterHeater/Water-Heater-Repair.jpg';
import WaterHeater from '@public/services/waterHeater/Water-Heater.png';

interface Service {
  title: string;
  image: StaticImageData;
}

export const ServiceCategory: Record<
  Exclude<THeroImageCategory, 'HOME' | 'BOOKING'>,
  Service[]
> = {
  COOLING: [
    { title: 'Air Conditioner Repair', image: AirConditionerRepair },
    { title: 'Air Conditioner Replacement', image: AirConditionerReplacement }, // 이미지 교체 요함
    { title: 'Ductless Heat Pump', image: DuctlessHeatPump },
  ],
  HEATING: [
    { title: 'Air Handler', image: AirHandler },
    { title: 'Boiler Replacement', image: BoilerReplacement },
    { title: 'Central Heat Pump', image: HCentralHeatPump },
    { title: 'Ductless Heat Pump', image: HDuctlessHeatPump },
    { title: 'Furnace And Boiler Repair', image: FurnaceAndBoilerRepair },
    { title: 'Furnace Maintenance', image: FurnaceMaintenance },
    { title: 'Furnace Replacement', image: FurnaceReplacement },
  ],
  IAQ: [
    { title: 'Duct Work', image: AirPurificationSystem }, // 이미지 교체 요함
    { title: 'Heat Recovery Ventilator', image: HeatRecoveryVentilator },
    { title: 'Humidifier', image: Humidifier },
    { title: 'UV Light', image: UVLight },
  ],
  WATERHEATER: [
    { title: 'Tankless Water Heater', image: TanklessWaterHeater },
    { title: 'Water Heater Repair', image: WaterHeaterRepair },
    { title: 'Water Heater', image: WaterHeater }, //이미지 교체 요함
  ],
};
