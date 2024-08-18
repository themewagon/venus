declare module '@mui/material/styles' {
  interface Theme {
    customShadows: string[];
  }
  interface ThemeOptions {
    customShadows?: string[];
  }
}

const customShadows = ['0px 18px 40px 0px #7090B01F'];

export default customShadows;
