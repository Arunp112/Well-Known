import React from "react";
import MaterialForm from "./MaterialForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Style/MaterialForm.css"

function Dashboard () {
  return (
    <motion.div className="margin-dashboard height-full " initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
      <div className="  pb-2 mt-3 px-3 ">
        <div className="breadcrum-top text-xs">
          <nav aria-label="breadcrum  ">
            <ol class="breadcrumb mb-1">
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
        <div className="">
          <span className=" fw-semibold text-blue text-md ">
            Create Inquiry{" "}
          </span>
        </div>
      </div>
      <div>
        <MaterialForm />
        <div className="button-bottom">


          <div className="form-buttons pb-2 d-flex justify-content-between pt-2  ">
            <button className=" btn-cancel text-sm">Cancel</button>
            <button className=" btn-primary  text-sm">Save</button>
          </div>
          <div className="breadcrum-bottom bg-light-grey  px-3 py-1  text-xs">
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
      </div>
    </motion.div>
  );
}

export default Dashboard;
