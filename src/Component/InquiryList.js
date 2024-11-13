import React from 'react' ;
import MaterialForm from './MaterialForm';
import { Link } from 'react-router-dom';

function InquiryList() {
  return (
    <div>
      <div className=" height-full">
      <div className="  pb-2 mt-3  ">
        <div className="breadcrum-top text-xs">

        <nav aria-label="breadcrum  ">
          <ol class="breadcrumb mb-1">
            <Link to={"#"} class="breadcrumb-item text-decoration-none text-grey">
              Dashboard
            </Link>
            <li class="breadcrumb-item text-blue" aria-current="page">
              Inquiry list 
            </li>
           
          </ol>
        </nav>
        </div>
        <div>
          <span className='text-blue text-md fw-semibold '>Inquiry List</span>
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
