import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import "../Style/MaterialForm.css";
import RenderFormContent from "./RenderFormContent";
import FormContent from "./FormContent";
import { Link } from "react-router-dom";

const MaterialForm = () => {
  const [activeTab, setActiveTab] = useState("Basic Detail");
  // const tabs = ["Basic Detail", "Select Material", "Make Schedule"];

  return (
    <div id="main">
      <Container fluid className="material-form-container mt-2   ">
        <div
          variant="tabs"
          defaultActiveKey="Basic Detail"
          className="mb-4  bg-light-grey  material-btn basic-tab  rounded-2 "
        >
          {["Basic Detail", "Select Material", "Make Schedule"].map((tab) => (
            <div key={tab} className="">
              <Row>
                <Col>
              <Button
                className={` text-sm ${
                  activeTab === tab
                    ? "active-tab tansition"
                    : " inactive-tab transition"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
      <div id="parent" className="pv-shadow  form-height">
        <Form className=" render-form ">
          {/* {renderFormContent()} */}
          <div className="mt-3">
            <RenderFormContent activeTab={activeTab} />
          </div>
          {/* {activeTab === "Basic Detail" && ( */}
          {/* <div className="form-buttons d-flex justify-content-between pt-2 px-3 ">
            <button className="me-3 btn-cancel text-sm">Cancel</button>
            <button className=" btn-primary me-3 text-sm">Save</button>
          </div>
          <div className="breadcrum-bottom bg-light-grey  px-3 py-1  text-xs">
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
          </div> */}
          {/* )}  */}
        </Form>
        {/* <div className="footer-container">
          <div className="form-buttons d-flex justify-content-between pt-2 px-3 ">
            <button className="me-3 btn-cancel text-sm">Cancel</button>
            <button className=" btn-primary me-3 text-sm">Save</button>
          </div>
          <div className="breadcrum-bottom bg-light-grey mt-3 px-3 py-1  text-xs">
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
        </div> */}
      </div>
      {/* <FormContent/> */}
    </div>
  );
};

export default MaterialForm;
