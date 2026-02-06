import React, { useState } from 'react';
import { Search, Coffee, Settings, ArrowLeft, Tool, AlertTriangle, Phone, Package, ThermometerSnowflake } from 'lucide-react';
export default function VendingFountainApp() {
  const [screen, setScreen] = useState('home');
  const [search, setSearch] = useState('');

  // --- DATA SECTIONS ---
  const errorDatabase = {
    "E1": { cause: "Water Supply Timed Out", fix: "Check water source. Verify inlet solenoid is opening." },
    "E2": { cause: "High Carbonator Level", fix: "Check for CO2 leak into water line. Inspect probe." },
    "JC": { cause: "Jam in Column (Vending)", fix: "Check motor timing and product alignment." },
    "HE": { cause: "Health Error", fix: "Temp above 41°F. Check compressor and evaporator fans." }
  };

  const contacts = [
    { name: "Lancer Support", phone: "1-800-729-1500" },
    { name: "Cornelius Support", phone: "1-800-238-3600" },
    { name: "Dixie Narco", phone: "1-800-621-7278" }
  ];

  // --- UI COMPONENTS ---
  const BackButton = () => (
    <button onClick={() => setScreen('home')} className="mb-4 flex items-center text-blue-600 font-semibold">
      <ArrowLeft size={20} className="mr-1" /> Back to Dashboard
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-10">
      {/* HEADER */}
      <div className="bg-blue-900 text-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold">Equipment Pro-Fix</h1>
        <p className="text-blue-200 text-sm">Fountain & Vending Assistant</p>
      </div>

      <div className="p-4 max-w-md mx-auto">

        {/* SCREEN: HOME */}
        {screen === 'home' && (
          <div className="space-y-4">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Quick Error Lookup (e.g. E1)"
                className="w-full p-4 pl-12 rounded-xl border-none shadow-md outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setSearch(e.target.value.toUpperCase());
                  if(errorDatabase[e.target.value.toUpperCase()]) setScreen('diagnostics');
                }}
              />
              <Search className="absolute left-4 top-4 text-gray-400" />
            </div>

            <button onClick={() => setScreen('fountain')} className="w-full flex items-center p-6 bg-white rounded-2xl shadow-sm border-l-8 border-blue-500 active:bg-gray-50">
              <div className="bg-blue-100 p-3 rounded-full mr-4"><Coffee className="text-blue-600" /></div>
              <div className="text-left"><h2 className="font-bold text-lg">Fountain Service</h2><p className="text-sm text-gray-500">Lancer, Cornelius, Multiplex</p></div>
            </button>

            <button onClick={() => setScreen('vending')} className="w-full flex items-center p-6 bg-white rounded-2xl shadow-sm border-l-8 border-green-500 active:bg-gray-50">
              <div className="bg-green-100 p-3 rounded-full mr-4"><Settings className="text-green-600" /></div>
              <div className="text-left"><h2 className="font-bold text-lg">Vending Service</h2><p className="text-sm text-gray-500">Dixie Narco, Royal, Crane</p></div>
            </button>

            <button onClick={() => setScreen('support')} className="w-full flex items-center p-6 bg-white rounded-2xl shadow-sm border-l-8 border-gray-400 active:bg-gray-50">
              <div className="bg-gray-100 p-3 rounded-full mr-4"><Phone className="text-gray-600" /></div>
              <div className="text-left"><h2 className="font-bold text-lg">Tech Support Lines</h2><p className="text-sm text-gray-500">Factory direct help</p></div>
            </button>
          </div>
        )}

        {/* SCREEN: FOUNTAIN */}
        {screen === 'fountain' && (
          <div>
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Fountain Brands</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Lancer', 'Cornelius', 'Multiplex', 'Follett'].map(brand => (
                <button key={brand} onClick={() => setScreen('diagnostics')} className="bg-white p-6 rounded-xl shadow-sm border text-center font-bold">{brand}</button>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN: VENDING */}
        {screen === 'vending' && (
          <div>
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Vending Systems</h2>
            <div className="space-y-3">
              <button className="w-full flex p-4 bg-white rounded-xl shadow-sm items-center"><Package className="mr-3 text-orange-500"/> Delivery Issues</button>
              <button className="w-full flex p-4 bg-white rounded-xl shadow-sm items-center"><Settings className="mr-3 text-green-500"/> Payment/MDB</button>
              <button className="w-full flex p-4 bg-white rounded-xl shadow-sm items-center"><ThermometerSnowflake className="mr-3 text-blue-500"/> Refrigeration</button>
            </div>
          </div>
        )}

        {/* SCREEN: DIAGNOSTICS/ERROR LOOKUP */}
        {screen === 'diagnostics' && (
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-100">
            <BackButton />
            {errorDatabase[search] ? (
              <>
                <div className="flex items-center text-red-600 mb-2"><AlertTriangle className="mr-2" /> <span className="font-bold uppercase">Fault Found</span></div>
                <h2 className="text-2xl font-bold mb-4">{errorDatabase[search].cause}</h2>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-bold text-green-800">The Fix:</p>
                  <p className="text-green-700">{errorDatabase[search].fix}</p>
                </div>
              </>
            ) : (
              <p className="text-center py-10 text-gray-400">Enter a code like E1 or JC in the search bar.</p>
            )}
          </div>
        )}

        {/* SCREEN: SUPPORT */}
        {screen === 'support' && (
          <div>
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Tech Support Lines</h2>
            {contacts.map(c => (
              <a key={c.name} href={`tel:${c.phone}`} className="flex justify-between p-4 bg-white mb-2 rounded-xl shadow-sm">
                <span className="font-bold text-blue-700">{c.name}</span>
                <span className="text-gray-500">{c.phone}</span>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
