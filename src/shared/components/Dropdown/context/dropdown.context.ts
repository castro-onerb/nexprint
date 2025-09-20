'use client';

import { createContext } from 'react';
import type { IDropdownContext } from '../DropdownRoot';

export const DropdownContext = createContext<IDropdownContext>({
  open: false,
  setOpen: () => {},
});
