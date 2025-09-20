import { cloneElement, isValidElement, type ReactElement, type Ref } from 'react';

export function cloneWithRef<T>(
  element: ReactElement,
  ref: Ref<T>,
  extraProps: Record<string, unknown> = {},
): ReactElement {
  if (!isValidElement(element)) {
    throw new Error('Invalid React Element');
  }
  return cloneElement(element as ReactElement<any>, {
    ...extraProps,
    ref,
  });
}
