import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LoadingBounce, LoadingBounceProps } from './LoadingBounce';
import { LoadingTyping, LoadingTypingProps } from './LoadingTyping';
import { LoadingSpin, LoadingSpinProps } from './LoadingSpin';

type CompoundLoading = {
  Bounce: ForwardRefExoticComponent<LoadingBounceProps & RefAttributes<HTMLDivElement>>;
  Typing: ForwardRefExoticComponent<LoadingTypingProps & RefAttributes<HTMLDivElement>>;
  Spin: ForwardRefExoticComponent<LoadingSpinProps & RefAttributes<HTMLDivElement>>;
};

export const Loading: CompoundLoading = {
  Bounce: LoadingBounce,
  Typing: LoadingTyping,
  Spin: LoadingSpin,
};
