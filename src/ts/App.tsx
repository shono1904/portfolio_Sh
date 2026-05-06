// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail/WorkDetail";
import Models from "./pages/models";
import Kyoka from "./pages/Models/kyoka";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<WorkDetail />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/kyoka" element={<Kyoka />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
