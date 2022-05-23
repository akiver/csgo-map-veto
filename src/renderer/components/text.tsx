import { ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from 'renderer/theme/theme';

type FontSize = 'sm' | 'lg' | 'xl';

const getFontSize = (size?: FontSize) => {
  switch (size) {
    case 'sm':
      return 14;
    case 'lg':
      return 18;
    case 'xl':
      return 22;
    default:
      return 16;
  }
};

type Props = {
  children: ReactNode;
  isUppercase?: boolean;
  isBold?: boolean;
  size?: FontSize;
  textAlign?: 'left' | 'right' | 'center';
  color?: keyof Theme;
  className?: string;
};

export const Text = styled.p<Props>`
  ${({ isUppercase }) => isUppercase && 'text-transform: uppercase;'}
  ${({ isBold }) => isBold && 'font-family: Lato-bold;'}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ size }) => `font-size: ${getFontSize(size)}px;`}
  color: ${({ color, theme }) => (color ? theme[color] : theme.darkInversed)};
`;
