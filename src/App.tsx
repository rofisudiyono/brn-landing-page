import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { Layout } from "@/components/layout/Layout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const TentangPage = lazy(() => import("@/pages/TentangPage"));
const EventPage = lazy(() => import("@/pages/EventPage"));
const PetaPartnerPage = lazy(() => import("@/pages/PetaPartnerPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const DaftarPage = lazy(() => import("@/pages/DaftarPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#F5C800]" />
        <p className="text-sm font-medium text-gray-500">Memuat halaman...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/tentang"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <TentangPage />
                </Suspense>
              }
            />
            <Route
              path="/event"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <EventPage />
                </Suspense>
              }
            />
            <Route
              path="/peta-partner"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <PetaPartnerPage />
                </Suspense>
              }
            />
            <Route
              path="/terms"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <TermsPage />
                </Suspense>
              }
            />
            <Route
              path="/daftar"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <DaftarPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
