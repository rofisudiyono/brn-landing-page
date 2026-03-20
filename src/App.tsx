import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import TentangPage from '@/pages/TentangPage'
import EventPage from '@/pages/EventPage'
import PetaPartnerPage from '@/pages/PetaPartnerPage'
import TermsPage from '@/pages/TermsPage'
import DaftarPage from '@/pages/DaftarPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/peta-partner" element={<PetaPartnerPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/daftar" element={<DaftarPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
