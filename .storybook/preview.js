import '!style-loader!css-loader!sass-loader!../assets/stylesheet/globals.scss';
import { ThemeProvider } from 'next-themes';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    console.log(context)
    return (
      <ThemeProvider forcedTheme={context.globals.theme}>
        <Story />
      </ThemeProvider>
    );
  },
];


export const globalTypes = {
  theme: {
    name: 'dark/light',
    description: 'Global color scheme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'transfer',
      items: ['light', 'dark'],
      showName: true,
      dynamicTitle: true,
    },
  },
};
