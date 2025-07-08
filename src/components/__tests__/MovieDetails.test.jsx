import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieDetails from '../MovieDetails';

const sampleMovie = {
  Title: 'Inception',
  Year: '2010',
  imdbID: 'tt1375666',
  imdbRating: '8.8',
  Plot: 'A thief who steals corporate secrets …',
  Website: 'https://inceptionmovie.warnerbros.com/'
};

describe('MovieDetails modal', () => {
  it('renders movie info when movie prop present', () => {
  render(<MovieDetails movie={sampleMovie} onClose={() => {}} />);

  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(screen.getByText(/Inception/i)).toBeInTheDocument();

  // ✅ FIXED: Check parent element for full text content
  const ratingElement = screen.getByText(/Rating:/i).parentElement;
  expect(ratingElement).toHaveTextContent('⭐ 8.8');
});


  it('calls onClose when Escape pressed', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(<MovieDetails movie={sampleMovie} onClose={handleClose} />);
    await user.keyboard('{Escape}');

    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(<MovieDetails movie={sampleMovie} onClose={handleClose} />);
    await user.click(screen.getByTestId('overlay'));

    expect(handleClose).toHaveBeenCalled();
  });
});
