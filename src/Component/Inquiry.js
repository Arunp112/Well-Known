import React, { useState } from "react";
import "../Style/Inquiry.css";
import { Table } from "react-bootstrap";
import { Arrow } from "../Image/Icons";
import { Link } from "react-router-dom";
import InquiryList from "./InquiryList";

const inquiryData = [
  {
    webcode: "W000076108",
    status: "New",
    soldTo: "Dev Synthetics",
    materialGroup: "FDYD",
  },
  {
    webcode: "W000075544",
    status: "In Process",
    soldTo: "Shruti Rayon",
    materialGroup: "FDYD",
  },
  {
    webcode: "W000073981",
    status: "Processed",
    soldTo: "Shree Umiya Yarn",
    materialGroup: "FDY",
  },
  {
    webcode: "W000076789",
    status: "Draft",
    soldTo: "Atlas Industries",
    materialGroup: "FDYD",
  },
  {
    webcode: "W000076010",
    status: "New",
    soldTo: "Omega Textiles",
    materialGroup: "FDYD",
  },
];

const Inquiry = () => {
  const [activeTab, setActiveTab] = useState("New Inquiry");
  const [activeFilter, setActiveFilter] = useState("New");

  const filteredInquiries = inquiryData.filter(
    (inquiry) =>
      activeTab === "Approved Inquiry" || inquiry.status === activeFilter
  );

  return (
    <div className="">
      <div className="inquiry-container ">
        <InquiryList />
        {/* Tab Buttons */}
        <div className="tab-container bg-light-grey rounded-2">
          <button
            className={`tab  text-sm ${
              activeTab === "New Inquiry" ? "active" : ""
            }`}
            onClick={() => setActiveTab("New Inquiry")}
          >
            New Inquiry
          </button>
          <button
            className={`tab text-sm ${
              activeTab === "Approved Inquiry" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Approved Inquiry")}
          >
            Approved Inquiry
          </button>
        </div>

        {/* Filter Buttons - Only show for "New Inquiry" tab */}
        {activeTab === "New Inquiry" && (
          <div className="status-filter py-3">
            {["New", "In Process", "Processed", "Draft"].map((status) => (
              <button
                key={status}
                className={`status-button text-xs  rounded-4${
                  activeFilter === status ? " active-status-button" : ""
                }`}
                onClick={() => setActiveFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        )}

        {/* Table */}
      </div>
      <Table hover className="inquiry-table tableCellRecord ">
        <thead>
          <tr style={{ backgroundColor: "lightgreen" }}>
            <th style={{ backgroundColor: "#F5F5F5", color: "#999999" }}>
              <div className="th-arrow">
                <span className="text-xs">Webcode </span>
                <span className="pb-1">
                  <Arrow />
                </span>
              </div>
            </th>
            <th style={{ backgroundColor: "#F5F5F5", color: "#999999" }}>
              <div className="th-arrow">
                <span className="text-xs"> Status </span>
                <span className="pb-1">
                  <Arrow />
                </span>
              </div>
            </th>
            <th style={{ backgroundColor: "#F5F5F5", color: "#999999" }}>
              <div className="th-arrow">
                <span className="text-xs"> Sold to Party</span>
                <span className="pb-1">
                  <Arrow />
                </span>
              </div>
            </th>
            <th style={{ backgroundColor: "#F5F5F5", color: "#999999" }}>
              <div className="th-arrow">
                <span className="text-xs"> Material Group</span>
                <span className="pb-1">
                  <Arrow />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredInquiries.length > 0 ? (
            filteredInquiries.map((inquiry, index) => (
              <tr key={index}>
                <td className="webcode-cell text-xs">
                  <a href={`#${inquiry.webcode}`}>{inquiry.webcode}</a>
                </td>
                <td className="status-cell">
                  <span className="status-label text-xs">{inquiry.status}</span>
                </td>
                <td className="text-xs">{inquiry.soldTo}</td>
                <td className="text-xs">{inquiry.materialGroup}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Inquiries Available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="px-3">
        <div className=" height-full footer-content">
          <div className="  pb-2 mt-3  ">
            <div className="breadcrum-bottom text-xs bg-light-grey">
              <nav aria-label="breadcrum  ">
                <ol class="breadcrumb m-0">
                  <Link
                    to={"#"}
                    class="breadcrumb-item text-decoration-none text-grey"
                  >
                    Dashboard
                  </Link>
                  <li class="breadcrumb-item text-blue" aria-current="page">
                    Inquiry list
                  </li>
                </ol>
              </nav>
            </div>
            {/* <div>
              <span className="text-blue text-md fw-semibold ">
                Inquiry List
              </span>
            </div> */}
          </div>
          {/* <div>
        <MaterialForm />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
