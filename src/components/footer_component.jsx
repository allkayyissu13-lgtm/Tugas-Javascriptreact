import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Barra Alkayyisu. Built with ReactJS & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;