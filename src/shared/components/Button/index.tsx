import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { ButtonRoot, ButtonRootProps } from './button-root';

type CompoundButton = {
  Root: ForwardRefExoticComponent<ButtonRootProps & RefAttributes<HTMLButtonElement>>;
};

export const Button: CompoundButton = {
  Root: ButtonRoot,
};
