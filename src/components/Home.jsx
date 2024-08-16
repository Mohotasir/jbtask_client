import { useState, useEffect, useRef } from 'react';
import AllProducts from "./AllProducts/AllProducts";
import Hero from "./Hero/Hero";
import Sidebar from './sideBar/Sidebar';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current && placeholderRef.current) {
        //const sidebarTop = sidebarRef.current.getBoundingClientRect().top;
        const placeholderTop = placeholderRef.current.getBoundingClientRect().top;
        const shouldStick = placeholderTop <= 0;

        setIsSticky(shouldStick);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex gap-6">
        <div className="w-3/4">
          <AllProducts />
        </div>
        <div className="w-1/4">
          {/* Placeholder div to maintain layout when sidebar is fixed */}
          <div ref={placeholderRef} style={{ height: isSticky ? `${sidebarRef.current.offsetHeight}px` : 'auto' }} />
          <div
            ref={sidebarRef}
            className={`transition-all duration-300 ${isSticky ? 'fixed top-0' : ''}`}
          >
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
