import { useState, useCallback } from 'react';
import type { Cancellation } from '../../server/types.js';

interface UseCancellationsResult {
  cancellations: Cancellation[];
  loading: boolean;
  error: string | null;
  fetchCancellations: (from: string) => Promise<void>;
}

export const useCancellations = (): UseCancellationsResult => {
  const [cancellations, setCancellations] = useState<Cancellation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCancellations = useCallback(async (from: string) => {
    if (!from || from.trim() === '') {
      setError('Please enter a station name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/cancellations/${encodeURIComponent(from)}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch cancellations: ${response.statusText}`
        );
      }

      const data = await response.json();
      setCancellations(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred while fetching cancellations'
      );
      setCancellations([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    cancellations,
    loading,
    error,
    fetchCancellations,
  };
};
