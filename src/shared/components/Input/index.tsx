import { ReactElement } from 'react';
import { InputRoot, InputRootProps } from './input-root';
import { InputLabel, InputLabelProps } from './input-label';
import { InputGroup, InputGroupProps } from './input-group';

type CompoundInput = {
  Group: (props: InputGroupProps) => ReactElement;
  Label: (props: InputLabelProps) => ReactElement;
  Root: (props: InputRootProps) => ReactElement;
};

export const Input: CompoundInput = {
  Group: InputGroup,
  Label: InputLabel,
  Root: InputRoot,
};
