import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { PlusIcon } from "../../Image/Icons";

import "./Pagination.css"; // Assuming you'll add your CSS here for custom styling
import { PlusIcon } from "../../Image/Icons";

const Pagination1 = ({ totalPages = 20 }) => {
  const navigate=useNavigate()
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToCreateInquiry=()=>{
      navigate('/dashboard')
  }

  return (
    <div className="pagination-container pagination-container-btn-bottom d-flex align-items-center gap-4 justify-content-between mb-2">
      <div className="page-info d-flex align-items-center">
        <button
          variant=""
          className="pagination-button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span className="page-number text-xs">
          {String(currentPage).padStart(2, "0")}
        </span>
        <button
          variant=""
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        <span className="page-text text-xs">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <button variant="" className="add-button" onClick={goToCreateInquiry}>
        <PlusIcon/>
      </button>
    </div>
  );
};

export default Pagination1;
