import { render, screen } from '@testing-library/react';

import ExamplePage from './ExamplePage';

describe('ExamplePage component', () => {
  it('should render text - React JS Application', () => {
    render(<ExamplePage />);

    expect(screen.getByText('React JS Application')).toBeInTheDocument();
  });
});
