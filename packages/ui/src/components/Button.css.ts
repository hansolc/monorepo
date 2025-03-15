import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../styles/theme/colors.css';

export const storiesButton = recipe({
  base: {},
  variants: {
    bg: {
      primary: { backgroundColor: vars.colors.primary },
      secondary: { backgroundColor: vars.colors.secondary },
      tertiary: { backgroundColor: vars.colors.tertiary },
    },
  },
});

export type StoriesButtonProps = NonNullable<RecipeVariants<typeof storiesButton>>;
