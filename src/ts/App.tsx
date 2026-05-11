// App.tsx
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail/WorkDetail";
import Models from "./pages/models";
import Kyoka from "./pages/Models/kyoka";

const isThemeTargetPath = (pathname: string) => {
  return pathname === "/profile" || pathname === "/works" || pathname === "/models" || pathname.startsWith("/works/");
};

function AppShell() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const location = useLocation();
  const showThemeToggle = isThemeTargetPath(location.pathname);

  useEffect(() => {
    const darkBodyActive = showThemeToggle && isDarkTheme;
    document.body.classList.toggle("theme-target-dark", darkBodyActive);

    return () => {
      document.body.classList.remove("theme-target-dark");
    };
  }, [showThemeToggle, isDarkTheme]);

  return (
    <div className="app-shell">
      <Header
        showThemeToggle={showThemeToggle}
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => setIsDarkTheme((prev) => !prev)}
      />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile isDarkTheme={isDarkTheme} />} />
          <Route path="/works" element={<Works isDarkTheme={isDarkTheme} />} />
          <Route path="/works/:id" element={<WorkDetail isDarkTheme={isDarkTheme} />} />
          <Route path="/models" element={<Models isDarkTheme={isDarkTheme} />} />
          <Route path="/models/kyoka" element={<Kyoka />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
