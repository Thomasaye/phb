/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { DoctorProfile } from "./components/DoctorProfile";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-primary/10 selection:text-primary">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
