import type { WeatherModule } from '../registry/types';
import { WEATHER_MODIFIERS } from './modifiers';

const snow: WeatherModule = {
  id: 'snow', label: '降雪', icon: 'snow',
  light: WEATHER_MODIFIERS.snow,
};
export default snow;
