import React, { useContext } from 'react';
import mockup from './recova-mockup-optimized.png';
import { ThemeContext } from './ThemeContext';

function ThemeToggle({ className = "" }) {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <button
      className={`p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition ${className}`}
      onClick={() => setDark(!dark)}
    >
      {dark ? '🌞' : '🌙'}
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-6">
      <div className="w-full bg-indigo-600 text-white py-2 text-center text-sm font-medium">
        ✨ Recova is now accepting early access signups – don’t miss out!
      </div>
      <ThemeToggle className="fixed top-20 right-6 z-50" />
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-800 dark:text-white transition-opacity duration-500 opacity-0 animate-fade-in">
          Recova – The Backup Your Crypto Actually Deserves
        </h1>
        <p className="text-lg md:text-xl mb-6">
          What happens if you lose your wallet? What if your seed phrase is gone forever?
        </p>
        <p className="text-md md:text-lg mb-6">
          Hundreds of billions in crypto are already lost. You don’t want to be next.
        </p>
        <div className="w-full flex justify-center mt-12 mb-16">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl">
            <img
              src={mockup}
              alt="Recova Kit Mockup"
              className="w-auto max-w-full object-contain mx-auto"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: "🛡️", title: "Steel Backup", desc: "Indestructible metal plate for your 24 recovery words." },
            { icon: "🔐", title: "NFC Security", desc: "Encrypted NFC card – your second layer of secure validation." },
            { icon: "🔄", title: "Biometric Recovery", desc: "Trigger recovery using biometric confirmation and a backup wallet." },
            { icon: "🚫", title: "100% Offline", desc: "No cloud. No servers. No middlemen. Just you." }
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 shadow-md p-6 rounded-xl">
              <div className="text-3xl mb-2">{icon}</div>
              <h2 className="text-xl font-semibold mb-1">{title}</h2>
              <p className="text-black dark:text-white text-opacity-80">{desc}</p>
            </div>
          ))}
        </div>
        <p className="italic text-md md:text-lg mb-4">
          Recova is not just another “crypto backup.” It’s a mindset. A tool. A moment of calm in a chaotic digital world.
        </p>
        <p className="text-sm text-zinc-400 mb-6">Built by crypto users, for crypto users.</p>
        <div className="mt-12 w-full max-w-2xl mx-auto">
          <iframe
            src="https://tally.so/embed/mR2ZvQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="220"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Recova Early Access"
            className="rounded-xl border border-zinc-800 bg-white dark:bg-transparent"
          />
        </div>
        <p className="text-sm text-zinc-400 mt-4">Limited early access spots available.<br />No spam, ever. Just one email when we launch.</p>
      </div>
    </div>
  );
}
