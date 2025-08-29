import { render, screen } from '@testing-library/react';
import { ThemeToggle } from '../theme-toggle';

// Mock do hook useTheme
jest.mock('@/lib/use-theme', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: jest.fn(),
  }),
}));

describe('ThemeToggle', () => {
  it('renderiza o botão de toggle de tema', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('tem o título correto para o tema claro', () => {
    render(<ThemeToggle />);

    const button = screen.getByTitle('Mudar para tema escuro');
    expect(button).toBeInTheDocument();
  });
});
