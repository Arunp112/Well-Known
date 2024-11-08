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

function App() {
  return (
    <> <div>

        <Header />
        <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<Analysis/>}/>
        <Route path="/inquiryList" element={<InquiryList/>}/>
        <Route path="/custom" element={<Custom/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
