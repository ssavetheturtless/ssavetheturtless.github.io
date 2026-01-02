
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-[#f4f2ed] text-black font-mono min-h-screen flex flex-col justify-start p-6 sm:p-12 md:px-16 md:pb-16 md:pt-[15vh] relative">
      <main className="max-w-3xl w-full md:ml-[10%] lg:ml-[16.67%] pt-12 md:pt-0">
        <h1 className="text-xl mb-10 tracking-tight max-w-xl">
          Ryan Lee
        </h1>

        <div className="space-y-3 text-sm sm:text-base leading-relaxed tracking-tight mb-8 max-w-xl">
          <p>
            Ops at{' '}
            <a 
              href="https://www.story.inc/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-1 underline-offset-2 hover:text-gray-500 transition-colors"
            >
              Story Co.
            </a>
          </p>
          <p>
            Applied research at{' '}
            <a 
              href="https://www.sicstudio.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-1 underline-offset-2 hover:text-gray-500 transition-colors"
            >
              [ sīc ] Studio
            </a>
            .
          </p>
          <p>Previously lived and worked in a refugee settlement on the Thai-Burma border region and did finances for the Public International Law & Policy Group.</p>
          <p>From DC → BC, Boston → Burma. Now in SF for some reason. </p>
        </div>

        <div className="bg-white border border-[#e6e2d8] rounded-xl p-5 sm:p-6 mb-10 text-stone-800 text-sm sm:text-base leading-relaxed shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
          <p className="mb-4">
            <span className="font-bold text-black mr-2">ON MY MIND:</span>
            Currently thinking a lot about global data disparities and how the data deficit of emerging economies may be impeding growth prospects.
          </p>
          <p>
            In other words, how do we close that data gap?
          </p>
        </div>

        <div className="mt-12 text-sm sm:text-base max-w-xl">
          <nav className="flex items-center space-x-2">
            <a href="https://x.com/rdlee210" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-gray-500 transition-colors">twitter</a>
            <span className="text-gray-300">|</span>
            <a href="https://www.linkedin.com/in/ryan-d-lee-a12893104/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-gray-500 transition-colors">linkedin</a>
            <span className="text-gray-300">|</span>
            <a href="https://www.instagram.com/rdlee210/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-gray-500 transition-colors">instagram</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="underline decoration-1 underline-offset-2 hover:text-gray-500 transition-colors">writing</a>
          </nav>
        </div>
      </main>

      <a
        href="https://www.sicstudio.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-black text-white px-2 py-1 font-mono text-xs sm:text-sm tracking-widest hover:scale-105 transition-transform duration-200 z-50 select-none shadow-sm"
        aria-label="Link to SIC Studio"
      >
        ssavetheturtless
      </a>
    </div>
  );
};

export default App;
