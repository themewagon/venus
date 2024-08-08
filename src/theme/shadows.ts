declare module '@mui/material/styles' {
  interface Theme {
    customShadows: string[];
  }
  interface ThemeOptions {
    customShadows?: string[];
  }
}

const customShadows = ['0 0 6px 2px rgba(45, 45, 45, 0.2)'];

export default customShadows;
