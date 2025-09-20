import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { EffectShine, EffectShineProps } from './EffectShine';

type CompoundEffect = {
  Shine: ForwardRefExoticComponent<EffectShineProps & RefAttributes<HTMLDivElement>>;
};

export const Effect: CompoundEffect = {
  Shine: EffectShine,
};
