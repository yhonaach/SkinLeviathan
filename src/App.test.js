// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SkinLeviathan title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SkinLeviathan/i);
    expect(titleElement).toBeInTheDocument();
});
