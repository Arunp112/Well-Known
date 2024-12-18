import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeIcon,setActiveIcon]=useState(1)
  return (
    // { activeIcon===1 && (

      <div className="footer-container margin-dashboard mt-3">
      <div className="form-buttons d-flex justify-content-between pt-2 px-3 ">
      <button className="me-3 btn-cancel text-sm">Cancel</button>
        <button className=" btn-primary me-3 text-sm">Save</button>
      </div>
      <div className="breadcrum-bottom bg-light-grey mt-3 align-self-center d-flex justify-content-start py-auto align-items-center px-3 py-1  text-xs">
      <nav aria-label="breadcrum  ">
      <ol class="breadcrumb m-0 py-1">
            <Link
              to={"#"}
              class="breadcrumb-item text-decoration-none  text-grey"
            >
              Dashboard
            </Link>
            <Link
              to="/inquiryList "
              class="breadcrumb-item text-decoration-none text-grey"
            >
              Inquiry list
            </Link>
            <li class="breadcrumb-item  text-blue" aria-current="page">
              Create Inquiry
            </li>
          </ol>
        </nav>
      </div>
    </div>
  // )}
  );
};
export default Footer;
