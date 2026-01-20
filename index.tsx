import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// SVGs for Icons
const Icons = {
  Facebook: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  Youtube: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg>,
  X: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>,
  Instagram: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  ChevronDown: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>,
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>,
};

const Ticker = () => {
  return (
    <div className="bg-trm-orange text-black font-display font-bold text-sm tracking-wider py-2 overflow-hidden relative z-50">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">LOVE RESONANCE THIS MOMENT. TRIGGER WITH LOVE RESONANCE THIS MOMENT.</span>
        <span className="mx-4">LOVE RESONANCE THIS MOMENT. TRIGGER WITH LOVE RESONANCE THIS MOMENT.</span>
        <span className="mx-4">LOVE RESONANCE THIS MOMENT. TRIGGER WITH LOVE RESONANCE THIS MOMENT.</span>
        <span className="mx-4">LOVE RESONANCE THIS MOMENT. TRIGGER WITH LOVE RESONANCE THIS MOMENT.</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="fixed top-10 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-white font-display font-bold text-4xl tracking-tighter">TRM</div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-white">
          <a href="#" className="hover:text-trm-orange transition-colors"><Icons.Facebook /></a>
          <a href="#" className="hover:text-trm-orange transition-colors"><Icons.Youtube /></a>
          <a href="#" className="hover:text-trm-orange transition-colors"><Icons.X /></a>
          <a href="#" className="hover:text-trm-orange transition-colors"><Icons.Instagram /></a>
        </div>
        
        <div className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-full text-xs font-bold cursor-pointer hover:bg-gray-200">
          ENG <Icons.ChevronDown />
        </div>
      </div>
    </div>
  );
};

const SideNavigation = ({ activeSection }: { activeSection: string }) => {
  const items = [
    { id: 'main', label: 'MAIN' },
    { id: 'about', label: 'ABOUT TRM' },
    { id: 'team', label: 'TEAM' },
    { id: 'works', label: 'WORKS' },
    { id: 'partners', label: 'PARTNERS' },
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-end gap-6 hidden md:flex">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-3 group cursor-pointer">
          <span className={`text-xs font-bold tracking-widest uppercase transition-opacity duration-300 ${activeSection === item.id ? 'opacity-100 text-white' : 'opacity-70 text-gray-400 group-hover:opacity-100'}`}>
            {item.label}
          </span>
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeSection === item.id ? 'bg-transparent border-white' : 'bg-transparent border-gray-500 group-hover:border-white'}`}>
             {activeSection === item.id && <div className="w-full h-full bg-white rounded-full scale-50" />}
          </div>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div id="main" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
         {/* Decorative Confetti (Simulated with particles or just static for now) */}
         
         {/* Main Text */}
         <div className="relative">
            <h1 className="font-display font-bold text-8xl md:text-[12rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-trm-orange drop-shadow-lg">
              CHAMPION
            </h1>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-white font-display text-4xl tracking-[1em] opacity-80 whitespace-nowrap hidden md:block">
              符文之地
            </div>
         </div>
         
         <div className="mt-8 bg-trm-orange/20 backdrop-blur-sm border border-trm-orange/50 text-white px-8 py-2 rounded-none font-display text-xl uppercase tracking-widest">
            Esports League 2024
         </div>
      </div>
    </div>
  );
};

const AboutSlider = () => {
  return (
    <div id="about" className="relative min-h-screen w-full bg-gradient-to-br from-[#004d40] via-[#000000] to-[#b71c1c] overflow-hidden flex items-center justify-center py-20">
      {/* Large Blurred Overlay Effects to match the gradient look */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#000000] to-transparent opacity-50"></div>
      
      <div className="max-w-6xl w-full px-4 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
        
        {/* Left Arrow */}
        <button className="hidden md:flex w-12 h-12 bg-trm-orange rounded-full items-center justify-center hover:bg-white hover:text-trm-orange transition-colors">
          <Icons.ChevronRight className="transform rotate-180" /> 
          {/* Actually the image shows a right arrow on the left side? No, it's a left arrow or just an indicator. Let's stick to standard carousel controls. 
             In the image, there is an orange circle with a generic symbol > on the left side of the content. It might be a 'next' button placed oddly or a 'play' button.
          */}
           <div className="text-black font-bold text-xl">{'>'}</div>
        </button>

        {/* Main Content Card */}
        <div className="flex-1 w-full max-w-4xl">
          {/* Image Area */}
          <div className="relative w-full aspect-video md:aspect-[2/1] rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" 
              alt="Team" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Text inside image? No, image is clean. Text is below. */}
          </div>

          {/* Text Content Block */}
          <div className="relative mt-0 bg-white w-full md:w-[90%] mx-auto -translate-y-8 md:-translate-y-12 shadow-xl flex">
            <div className="flex-1 p-8 md:p-10 text-black">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-widest uppercase">WE TRIGGER</h2>
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-widest uppercase">WE RESONANCE</h2>
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-widest uppercase">WE MOTIVE</h2>
              </div>
              
              <div className="flex gap-3 mt-8">
                 <div className="w-3 h-3 rounded-full bg-trm-orange cursor-pointer"></div>
                 <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer border border-gray-400"></div>
                 <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer border border-gray-400"></div>
                 <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer border border-gray-400"></div>
                 <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer border border-gray-400"></div>
              </div>
            </div>

            {/* Orange Vertical Strip */}
            <div className="w-12 md:w-16 bg-trm-orange flex items-center justify-center relative">
               <div className="absolute transform -rotate-90 whitespace-nowrap text-white font-display font-bold text-lg md:text-xl tracking-widest">
                 WE ARE <span className="text-black ml-2">TRM</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      if (window.scrollY > heroHeight) {
        setActiveSection('about');
      } else {
        setActiveSection('main');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-trm-orange selection:text-white">
      <Ticker />
      <Navbar />
      <SideNavigation activeSection={activeSection} />
      
      <main>
        <Hero />
        <AboutSlider />
        {/* Placeholder for other sections to make scrolling work */}
        <div id="team" className="min-h-screen bg-black flex items-center justify-center border-t border-white/10">
           <h2 className="text-4xl font-display font-bold text-gray-800">TEAM SECTION COMING SOON</h2>
        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);