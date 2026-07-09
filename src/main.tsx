import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { AuthProvider } from './context/AuthContext'
import App from './App'
import './styles/index.css'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL || 'https://dummy-url.convex.cloud')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <BrowserRouter>
              <App />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#1e3a8a',
                    color: '#fff',
                  },
                }}
              />
            </BrowserRouter>
          </HelmetProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ConvexProvider>
  </React.StrictMode>,
)