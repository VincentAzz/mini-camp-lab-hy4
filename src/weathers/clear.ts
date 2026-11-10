import type { WeatherModule } from '../registry/types';
import { WEATHER_MODIFIERS } from './modifiers';

const clear: WeatherModule = {
  id: 'clear', label: '晴朗', icon: 'clear',
  light: WEATHER_MODIFIERS.clear,
};
export default clear;
