import { Routes, Route } from "react-router-dom";

import CompHeader from "./components/CompHeader";
import CompMain1 from "./components/pages/CompMain1";
import CompNavbar from "./components/CompNavbar";
import CompPhotos from "./components/pages/CompPhotos";
import CompFooter from "./components/CompFooter";
import CompProducts from "./components/pages/CompProducts";
import CompSignin from "./components/pages/CompSignin";


function App() {
  return (
    <>
      
      <CompHeader />
      <CompNavbar />

      <Routes>
        <Route path="/" element={<CompMain1 />} />
        <Route path="/photos" element={<CompPhotos />} />
        <Route path="/products" element={<CompProducts />} />
      </Routes>

      <CompFooter />
    </>
  );
}

export default App;
