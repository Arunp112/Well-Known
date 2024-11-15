import React from "react";
import MaterialForm from "./MaterialForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <motion.div className="margin-dashboard height-full " initial={{x:"-100%"}} animate={{x:0}} transition={{duration: 0.5}}>
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
      </div>
    </motion.div>
  );
}

export default Dashboard;
