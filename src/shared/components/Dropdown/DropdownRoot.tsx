'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode, type Ref } from 'react';
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  VirtualElement,
  type Placement,
} from '@floating-ui/react';
import { DropdownContext } from './context/dropdown.context';
import { motion, AnimatePresence } from 'framer-motion';

export interface IDropdownContext {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export interface DropdownRootProps<T extends HTMLElement = HTMLElement> {
  children?: (props: { ref: Ref<T>; onClick: () => void; open: boolean }) => ReactNode;
  dropdown: ReactNode;
  placement?: Placement; // se houver trigger
  controlledOpen?: boolean;
  onToggle?: () => void;
  closeOnClickOutside?: boolean;

  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  motionOrigin?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function DropdownRoot<T extends HTMLElement = HTMLElement>({
  children,
  dropdown,
  placement = 'bottom-start',
  controlledOpen,
  onToggle,
  closeOnClickOutside = true,
  top,
  bottom,
  left,
  right,
  motionOrigin
}: DropdownRootProps<T>) {
  const referenceRef = useRef<T | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);

  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = controlledOpen !== undefined ? () => onToggle?.() : setInternalOpen;

  const updatePosition = useCallback(() => {
    if (!floatingRef.current) return;

    if (referenceRef.current) {
      // FloatingUI automático
      void computePosition(referenceRef.current, floatingRef.current, {
        placement,
        middleware: [offset(4), flip(), shift()],
      }).then(({ x, y, strategy }) => {
        Object.assign(floatingRef.current!.style, {
          position: strategy,
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    } else {
      // Posicionamento absoluto manual
      const style: Partial<CSSStyleDeclaration> = { position: 'absolute' };
      if (top !== undefined) style.top = `${top}px`;
      if (bottom !== undefined) style.bottom = `${bottom}px`;
      if (left !== undefined) style.left = `${left}px`;
      if (right !== undefined) style.right = `${right}px`;
      Object.assign(floatingRef.current.style, style);
    }
  }, [placement, top, bottom, left, right]);

  const virtualReference: VirtualElement = {
    getBoundingClientRect: () => ({
      x: left ?? 0,
      y: top ?? 0,
      width: 0,
      height: 0,
      top: top ?? 0,
      left: left ?? 0,
      right: right ?? 0,
      bottom: bottom ?? 0,
      toJSON: () => {},
    }),
    contextElement: floatingRef.current ?? undefined,
  };

  useEffect(() => {
    if (!open) return;

    if (referenceRef.current) {
      return autoUpdate(referenceRef.current, floatingRef.current!, updatePosition);
    } else {
      updatePosition();
    }
  }, [open, updatePosition]);


  useEffect(() => {
    if (!open || !closeOnClickOutside) return;
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (!referenceRef.current?.contains(target) && !floatingRef.current?.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open, closeOnClickOutside]);

  const setRef: React.Ref<T> = (el) => {
    referenceRef.current = el;
  };

  const getMotionOffset = () => {
    switch (motionOrigin) {
      case 'top': return { x: 0, y: -20 };
      case 'bottom': return { x: 0, y: 20 };
      case 'left': return { x: -20, y: 0 };
      case 'right': return { x: 20, y: 0 };
      case 'top-left': return { x: -20, y: -20 };
      case 'top-right': return { x: 20, y: -20 };
      case 'bottom-left': return { x: -20, y: 20 };
      case 'bottom-right': return { x: 20, y: 20 };
      default: return { x: 0, y: -10 };
    }
  };

  return (
    <>
      {children ? children({ ref: setRef, onClick: () => setOpen(prev => !prev), open }) : null}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={floatingRef}
            style={{
              zIndex: 1000,
              position: referenceRef.current ? undefined : 'absolute',
              top: top ?? undefined,
              bottom: bottom ?? undefined,
              left: left ?? undefined,
              right: right ?? undefined,
            }}
            initial={{ opacity: 0, scale: 0.95, ...getMotionOffset() }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, ...getMotionOffset() }}
          >
            {dropdown}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
