import React from 'react' ;
import MaterialForm from './MaterialForm';
import { Link } from 'react-router-dom';

function InquiryList() {
  return (
    <div>
      <div className="margin-dashboard height-full">
      <div className="  pb-2 mt-3 px-3 ">
        <div className="breadcrum-top text-xs">

        <nav aria-label="breadcrum  ">
          <ol class="breadcrumb">
            <Link to={"#"} class="breadcrumb-item text-decoration-none text-grey">
              Dashboard
            </Link>
            <li class="breadcrumb-item text-blue" aria-current="page">
              Inquiry list 
            </li>
           
          </ol>
        </nav>
        </div>
        <div className="">
          <span className=" fw-semibold text-blue text-md ">
            Inquiry List{" "}
          </span>
        </div>
      </div>
      {/* <div>
        <MaterialForm />
      </div> */}
    </div>
    </div>
  )
}

export default InquiryList
