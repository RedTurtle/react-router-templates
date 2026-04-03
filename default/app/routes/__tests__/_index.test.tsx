import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home, { meta } from '../_index';

describe('Home Route', () => {
  it('should return correct meta tags', () => {
    const metaTags = meta();

    expect(metaTags).toHaveLength(2);
    expect(metaTags[0]).toEqual({ title: 'New React Router App' });
    expect(metaTags[1]).toEqual({
      name: 'description',
      content: 'Welcome to React Router!',
    });
  });

  it('should render the home page', () => {
    render(<Home />);

    expect(screen.getByText("What's next?")).toBeDefined();
  });
});
