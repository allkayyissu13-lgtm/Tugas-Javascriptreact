import React, { useState } from 'react';
import NavComponent from './components/nav_component';
import ContentComponent from './components/content_component';
import FooterComponent from './components/footer_component';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <NavComponent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <ContentComponent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <FooterComponent />
    </div>
  );
}

export default App;