import { useReducer, useEffect, createContext, useContext } from 'react';

const ThemeContext = createContext();
const { Provider } = ThemeContext;

const themeReducer = (_, action) => {
  switch (action.type) {
    case 'TOGGLE_LIGHT':
      return 'LIGHT';
    case 'TOGGLE_DARK':
      return 'DARK';
    default:
      return 'LIGHT';
  }
};

export const ThemeProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(themeReducer, null);

  useEffect(() => {
    if (typeof window !== 'undefined' && state === null) {
      const savedTheme = localStorage.getItem('theme_preference');
      dispatch({ type: savedTheme });
    } else {
      localStorage.setItem('theme_preference', state);
    }
  }, [state]);

  const setTheme = (mode) => dispatch({ type: mode });

  return <Provider value={{ theme: state, setTheme }} {...props} />;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default { ThemeProvider, useTheme };
