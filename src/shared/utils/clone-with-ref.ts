import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type Ref,
  type ComponentPropsWithRef,
  type ElementType,
} from 'react';

export function cloneWithRef<T extends ElementType>(
  element: ReactElement<ComponentPropsWithRef<T>>,
  ref: Ref<T>,
  extraProps: Partial<ComponentPropsWithRef<T>> = {},
): ReactElement<ComponentPropsWithRef<T>> {
  if (!isValidElement(element)) {
    throw new Error('Invalid React Element');
  }

  return cloneElement(element, {
    ...extraProps,
    ref,
  });
}
