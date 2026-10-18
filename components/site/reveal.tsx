'use client';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import type { ReactNode, CSSProperties } from 'react';

type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-in'
  | 'scale-in'
  | 'slide-in-left'
  | 'slide-in-right';

type RevealProps = {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'article' | 'li';
};

export function Reveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const style: CSSProperties = {
    opacity: inView ? undefined : 0,
    animation: inView
      ? `${animation} 0.7s ease-out ${delay}ms both`
      : 'none',
  };

  return (
    <Tag ref={ref as never} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
