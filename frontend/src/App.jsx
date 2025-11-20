import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Breaker from './components/Breaker';
import Certificate from './components/Certificate';
import Completion from './components/Completion';
import Earthing from './components/Earthing';
import ToolBox from './components/ToolBox';

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Breaker' },
    { path: '/toolbox', label: 'Tool Box' },
    { path: '/earthing', label: 'Earthing' },
    { path: '/certificate', label: 'Certificate' },
    { path: '/completion', label: 'Completion' }
  ];

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-xl">AE</span>
            </div>
            <span className="font-bold text-xl">A.E RENEWABLE LTD</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-white text-emerald-600 font-semibold'
                    : 'hover:bg-emerald-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Breaker />} />
            <Route path="/toolbox" element={<ToolBox />} />
            <Route path="/earthing" element={<Earthing />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/completion" element={<Completion />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
