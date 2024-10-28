import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { describe, vi, it, MockedFunction, expect, afterEach } from 'vitest';
import { MveField } from '../mve-field.component';
import { useDataMveImageField } from '@hooks/use-data-mve-field.hook';

vi.mock('@hooks/use-data-mve-field.hook');

describe('<MveField />', () => {

  afterEach(() => {
    vi.restoreAllMocks();
  });

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
      </QueryClientProvider>,
    );

    expect(screen.getByTestId('mve-field-loading')).toBeInTheDocument();
  });

  it('displays the mve image field\'s name once loaded', () => {
    vi.mocked(useDataMveImageField).mockReturnValue({
      ...baseHook,
      isLoading: false,
      field: {
        id: '123',
        regex: '',
        created_at: null,
        field_order: 1,
        key: 'one-two-three',
        max_length: 10,
        min_length: null,
        max_value: 5,
        min_value: null,
        mve_image_id: '',
        required: true,
        type: null,
        updated_at: null,
      },
    });

    const onSelect = vi.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <MveField fieldId={'123'} isSelected={false} onSelect={onSelect} />
      </QueryClientProvider>,
    );
    expect(screen.getByText('one-two-three')).toBeInTheDocument();
  });
});
