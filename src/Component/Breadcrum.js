import React from 'react';
import { Link  }  from "react-router-dom"

function Breadcrum() {
  return (
    <div>
      <div className="breadcrum-bottom bg-light-grey mt-3 align-self-center d-flex justify-content-start py-auto align-items-center px-3 py-1  text-xs">
        <nav aria-label="breadcrum  ">
          <ol class="breadcrumb">
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
  )
}

export default Breadcrum
