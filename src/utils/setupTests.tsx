import '@testing-library/jest-dom';
import React from 'react';
import { render, queries, within, RenderOptions } from '@testing-library/react';
import { CatnipProvider } from '../components/CatnipProvider';

class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CatnipProvider>{children}</CatnipProvider>;
};

const customScreen = within(document.body, queries);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const customWithin = (element: React.ReactElement) => within(element, queries);
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries' | 'wrapper'>
) => {
  window.ResizeObserver = ResizeObserver;
  window.HTMLElement.prototype.scrollTo = jest.fn();

  return render(ui, { queries, wrapper: Providers, ...options });
};

export * from '@testing-library/react';
export { customRender as render, customWithin as within, customScreen as screen };
