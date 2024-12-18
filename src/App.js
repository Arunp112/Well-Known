// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Analysis from "./Component/Analysis"
import InquiryList from "./Component/InquiryList";
import Cart from "./Component/Cart";
import Custom from "./Component/Custom";
import Footer from "./Component/Footer";
import Breadcrum from "./Component/Breadcrum";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import InProcess from "./Component/FilterComponent/InProcess";
import Processed from "./Component/FilterComponent/Processed";
import Draft from "./Component/FilterComponent/Draft";

function App () {
  const location = useLocation();
  return (
    <> <div>

      <Header />
      <Sidebar />
      <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inquiryList" element={<Analysis />} />
        <Route path="/inquiryList" element={<InquiryList />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/inProcess" element={<InProcess/>}/>
        <Route path="/processed" element={<Processed/>}/>
        <Route path="/draft" element={<Draft/>}/>
      </Routes>
      </AnimatePresence>
      {/* <Footer/> */}
      {/* <Breadcrum/> */}
    </div>
    </>
  );
}

export default App;
