import { LayoutRoot } from './LayoutRoot';

type CompoundLayout = {
  Root: typeof LayoutRoot;
};

export const Layout: CompoundLayout = {
  Root: LayoutRoot,
};
