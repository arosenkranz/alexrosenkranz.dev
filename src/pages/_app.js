import { ThemeProvider } from '../lib/ThemeProvider';
import 'normalize.css';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
