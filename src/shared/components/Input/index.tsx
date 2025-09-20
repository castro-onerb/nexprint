import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { InputRoot, InputRootProps } from './input-root';
import { InputLabel, InputLabelProps } from './input-label';
import { InputGroup, InputGroupProps } from './input-group';
import { InputLegend, InputLegendProps } from './input-legend';

type CompoundInput = {
  Group: ForwardRefExoticComponent<InputGroupProps & RefAttributes<HTMLDivElement>>;
  Label: ForwardRefExoticComponent<InputLabelProps & RefAttributes<HTMLLabelElement>>;
  Root: ForwardRefExoticComponent<InputRootProps & RefAttributes<HTMLInputElement>>;
  Legend: ForwardRefExoticComponent<InputLegendProps & RefAttributes<HTMLSpanElement>>;
};

export const Input: CompoundInput = {
  Group: InputGroup,
  Label: InputLabel,
  Root: InputRoot,
  Legend: InputLegend,
};
