import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FormContent() {
  return (
    <div>
      <Container fluid>
        <Row className="py-2">
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Group Input Code</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Agent Code</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Marketing Executive</label>
              <input type="text" placeholder="Input text " className="form-input-section" />
            </div>
          </Col>

          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Sold to Party</label>
              <input type="text" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Ship to Party</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Destination</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Transporter</label>
              <input type="text" placeholder="Input text " className="form-input-section" />
            </div>
          </Col>

          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> PO Number</label>
              <input type="text" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> PO Date</label>
              <input type="date" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold">Division</label>
              <input type="input" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Material Group</label>
              <input type="input" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          
        </Row>
        {/* <Row className="py-2">
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2">
              <label className="text-xs fw-semibold"> Ship to Party</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2">
              <label className="text-xs fw-semibold"> Destination</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2">
              <label className="text-xs fw-semibold"> Transporter</label>
              <input type="text" placeholder="Input text " className="form-input-section" />
            </div>
          </Col>

          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2">
              <label className="text-xs fw-semibold"> PO Number</label>
              <input type="text" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          
        </Row>
        <Row className="py-2">
        <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2">
              <label className="text-xs fw-semibold"> PO Date</label>
              <input type="date" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2">
              <label className="text-xs fw-semibold">Division</label>
              <input type="input" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2">
              <label className="text-xs fw-semibold"> Material Group</label>
              <input type="input" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>

        </Row>
         */}

      </Container>
      <Container fluid>
        <Row className="py-2">
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Material Name</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Grade</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Target Quantity</label>
              <input type="text" placeholder="Input text " className="form-input-section" />
            </div>
          </Col>

          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Rate</label>
              <input type="text" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Pack Mode</label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          
          
         
          
        </Row>
       
        

      </Container>
      <Container fluid>
        <Row className="py-2">

        <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Inquiry Date</label>
              <input type="date" placeholder="Input text "  className="form-input-section"/>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="d-flex flex-column justify-content-start align-items-start gap-2 py-2">
              <label className="text-xs fw-semibold"> Quantity (in Kg) </label>
              <input type="text" placeholder="Input text " className="text-xs form-input-section" />
            </div>
          </Col>
          
          
          
          
        </Row>
        </Container>
    </div>
  );
}

export default FormContent;
