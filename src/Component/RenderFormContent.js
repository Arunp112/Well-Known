import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";

const RenderFormContent = ({ activeTab }) => {
  switch (activeTab) {
    case "Basic Detail":
      return (
        <Container fluid className="form-container">
          <Row className="py-2">
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Group Input Code</label><input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Agent Code</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold">
                  {" "}
                  Marketing Executive
                </label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>

            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Sold to Party</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Ship to Party</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Destination</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Transporter</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>

            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> PO Number</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> PO Date</label>
                <input
                  type="date"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold">Division</label>
                <input
                  type="input"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>
          </Row>
        </Container>
      );
    case "Select Material":
      return (
        <Container fluid className="form-container">
          <Row className="py-2">
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Material Name</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Grade</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Target Quantity</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>

            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Rate</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>

            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Pack Mode</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Pack Type</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Number of Cops</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Cops Count Control</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Batch No</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Transliftin</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col> <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Enduse</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>

          </Row>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Remark</label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
          </Row>
        </Container>
      );
    case "Make Schedule":
      return (
        <Container fluid className="form-container">
          <Row className="py-2">
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold"> Inquiry Date</label>
                <input
                  type="date"
                  placeholder="Input text "
                  className="form-input-section"
                />
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
                <label className="text-xs fw-semibold">
                  {" "}
                  Quantity (in Kg){" "}
                </label>
                <input
                  type="text"
                  placeholder="Input text "
                  className="text-xs form-input-section"
                />
              </div>
            </Col>
          </Row>
        </Container>
      );
    default:
      return null;
  }
};

export default RenderFormContent;
