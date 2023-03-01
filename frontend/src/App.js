import Routes from './routes';
import ThemeCustomization from './themes';
import AnimationHelper from './utils/animationHelper';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <ThemeCustomization>
      <AnimationHelper />
      <Toaster position="top" />
      <Routes />
    </ThemeCustomization>
  );
};
export default App;
