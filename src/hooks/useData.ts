import { useQuery } from '@tanstack/react-query'
import { EVENTS, PARTNERS } from '@/data'

// In production, replace these with actual API calls
export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      // Simulate async fetch
      await new Promise((r) => setTimeout(r, 200))
      return EVENTS
    },
  })
}

export function usePartners() {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200))
      return PARTNERS
    },
  })
}
