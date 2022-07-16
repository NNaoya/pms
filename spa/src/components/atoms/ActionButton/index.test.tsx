import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ActionButton from "./index";

test('check the ActionButton', () => {
  render(
    <ActionButton variant="contained" size="large" text="検索" />
  );
  const linkElement = screen.getByText(/検索/i);
  expect(linkElement).toBeInTheDocument();
})