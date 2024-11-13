import {React,useState} from 'react';
import { VerticleIcon, PlusIcon } from "../Image/Icons";
import "../Style/Inquiry.css"
import { ForwordArrow, BackwordArrow } from "../Image/Icons";
import { useNavigate } from 'react-router-dom';

function Pagination() {
  const navigate=useNavigate()
  const [count,setCount]=useState(0)

  const handleIncrease=()=>{
    setCount(count+1)
  }
  const handleDecrease=()=>{
    setCount(count-1)
  }
  const goToCreateInquiry=()=>{
    navigate("/dashboard")
  }
  return (
    <div>
      <div className=" pagination-content-bottom">
          <div>
            <button className="pagination-btn" onClick={handleDecrease}>
              <BackwordArrow />
            </button>
            <span className="p-1 border">{ count }</span>
            <button className="pagination-btn" onClick={handleIncrease}>
              <ForwordArrow />
            </button>
          </div>
          <span>
            <button className="bg-blue p-auto " onClick={goToCreateInquiry}>
              <PlusIcon />
            </button>
          </span>
        </div>
    </div>
  )
}

export default Pagination
