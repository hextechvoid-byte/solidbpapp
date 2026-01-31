import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { 
  Home,
  ServicesOverview,
  ServiceDetail,
  SectorsOverview,
  SectorDetail,
  LocationsOverview,
  LocationDetail,
  ProjectsPage,
  About,
  Contact,
  Quote
} from '@/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />
        
        {/* Services */}
        <Route path="diensten" element={<ServicesOverview />} />
        <Route path="diensten/:slug" element={<ServiceDetail />} />
        
        {/* Sectors */}
        <Route path="sectoren" element={<SectorsOverview />} />
        <Route path="sectoren/:slug" element={<SectorDetail />} />
        
        {/* Locations */}
        <Route path="locaties" element={<LocationsOverview />} />
        <Route path="locaties/:slug" element={<LocationDetail />} />
        
        {/* Projects */}
        <Route path="projecten" element={<ProjectsPage />} />
        
        {/* Company */}
        <Route path="over-ons" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Quote */}
        <Route path="offerte" element={<Quote />} />
        
        {/* 404 - redirect to home */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
