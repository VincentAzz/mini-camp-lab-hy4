import type { WeatherModule } from '../registry/types';
import { WEATHER_MODIFIERS } from './modifiers';

const rain: WeatherModule = {
  id: 'rain', label: '小雨', icon: 'rain',
  light: WEATHER_MODIFIERS.rain,
};
export default rain;
