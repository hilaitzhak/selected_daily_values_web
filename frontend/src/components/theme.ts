import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f0f0ec',
  text: '#363537',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;