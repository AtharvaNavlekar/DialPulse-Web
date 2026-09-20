/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Solutions from '@/pages/Solutions';
import FeatureDetail from '@/pages/FeatureDetail';
import Security from '@/pages/Security';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import FAQ from '@/pages/FAQ';
import About from '@/pages/About';
import Resources from '@/pages/Resources';
import Features from '@/pages/Features';
import LeadManagementFeature from '@/pages/LeadManagementFeature';
import ComingSoonPage from '@/pages/ComingSoonPage';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="features" element={<Features />} />
          <Route path="features/leads" element={<LeadManagementFeature />} />
          <Route path="features/:id" element={<FeatureDetail />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/:slug" element={<Solutions />} />
          <Route path="resources" element={<Resources />} />
          <Route path="security" element={<Security />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="blog" element={<ComingSoonPage />} />
          <Route path="guides" element={<ComingSoonPage />} />
          <Route path="case-studies" element={<ComingSoonPage />} />
          <Route path="compare" element={<ComingSoonPage />} />
          <Route path="careers" element={<ComingSoonPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

