import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { CatnipProvider } from '../components/CatnipProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CatnipProvider>{children}</CatnipProvider>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  window.ResizeObserver = ResizeObserver;
  window.HTMLElement.prototype.scrollTo = jest.fn();

  return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
