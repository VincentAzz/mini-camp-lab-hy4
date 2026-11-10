import type { WeatherModule } from '../registry/types';
import { WEATHER_MODIFIERS } from './modifiers';

const cloudy: WeatherModule = {
  id: 'cloudy', label: '多云', icon: 'cloudy',
  light: WEATHER_MODIFIERS.cloudy,
};
export default cloudy;
