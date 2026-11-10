import type { WeatherModule } from '../registry/types';
import { WEATHER_MODIFIERS } from './modifiers';

const fog: WeatherModule = {
  id: 'fog', label: '浓雾', icon: 'fog',
  light: WEATHER_MODIFIERS.fog,
};
export default fog;
