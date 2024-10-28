import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { describe, vi, it, MockedFunction, expect, afterEach } from 'vitest';
import { MveField } from '../mve-field.component';
import { useDataMveImageField } from '@hooks/use-data-mve-field.hook';

vi.mock('@hooks/use-data-mve-field.hook');

describe('<MveField />', () => {

  afterEach(() => {
    vi.restoreAllMocks();
  })

  const queryClient = new QueryClient();
  const baseHook = { field: undefined, isRefetching: false, isLoading: false };

  it('renders loading spinner when mve image is loading', () => {
    vi.mocked(useDataMveImageField).mockReturnValue({
      ...baseHook,
      isLoading: true,
    });
    const onSelect = vi.fn();
    render(
      <QueryClientProvider client={queryClient}>
        <MveField fieldId={'123'} isSelected={false} onSelect={onSelect} />
      </QueryClientProvider>
    );

    expect(screen.getByTestId('mve-field-loading')).toBeInTheDocument();
  });

  it('throws when mve image is not loading but mve image field is undefined', () => {
    vi.mocked(useDataMveImageField).mockReturnValue({
      ...baseHook,
      isLoading: false,
    });
    const onSelect = vi.fn();
    expect(
      render(
        <QueryClientProvider client={queryClient}>
          <MveField fieldId={'123'} isSelected={false} onSelect={onSelect} />
        </QueryClientProvider>
      )
    ).toThrow("Error: No MVE field with id '123'");
  });
});
