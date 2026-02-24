import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Loading = () => (
  <div className="min-h-screen bg-brand-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-brand-white/20 border-t-brand-white rounded-full animate-spin" />
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
