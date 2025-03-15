// import { themes, vars } from '../styles/theme.css'; // 프로젝트 내 theme 경로에 맞게 수정
import { testThemeClass } from './colors.css';

// const themeClass = createTheme(vars, themes.light); // 기본적으로 light theme 적용

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withThemeProvider = (Story: any) => {
  return (
    <div className={testThemeClass}>
      <Story />
    </div>
  );
};
