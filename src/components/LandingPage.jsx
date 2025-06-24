import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background dengan opacity 100% */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bg.jpg')`
        }}
      />
      
      {/* Gradient overlay hitam putih dengan opacity 70% */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 30%, rgba(255,255,255,0.7) 70%)',
          opacity: 0.85
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-4 tracking-tight">
            NGAPAIN BANG
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 drop-shadow-lg">
            SAYA GAK JUALAN
          </h2>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          {/* … (tiga tombol seperti di kode-mu) … */}
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-300 text-sm opacity-80">
            © 2025 - Just vibing, not selling
          </p>
        </div>
      </div>
    </div>
  );
};

// Set document title & favicon via JS (opsional, karena sudah di index.html)
if (typeof document !== 'undefined') {
  document.title = 'NGAPAIN BANG, SAYA GAK JUALAN.';
  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
  favicon.type = 'image/x-icon';
  favicon.rel = 'icon';
  favicon.href = '/images/favicon.ico';
  document.head.appendChild(favicon);
}

export default LandingPage;
