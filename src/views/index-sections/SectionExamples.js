/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components

function SectionExamples() {
  return (
    <>
     <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Meet some of our team...</h2>
            <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/joe-gardner-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Dr.Abboto</CardTitle>
                      <h6 className="card-category">Chief Resident</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                  With years of experience in the medical aesthetics field, Dr.Abotto leads
                  Revival Relaxation with a fine eye for beauty and the latest research in skin rejuvenation.
                  Dr.Abotto is compassionate and his mission is life is to empower patients to match their outer beauty with their inner beauty.


                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/hipster.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ryan Solholm</CardTitle>
                        <h6 className="card-category">Medspa Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Recruited to restructure and manage daily operations of Skin department within plastic surgery practice. Assessed product lines and reviewed profitability. Conducted pre-surgery consultations for four plastic surgeons and rendered skin care services to patients. Developed and cultivated relationships with vendors and medical organizations. Hired, trained and managed team of medical estheticians.

                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Registered Nurse</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Nurse RN with 8+ years of experience providing quality care to a wide variety of patients. Possesses a Master’s qualification in nursing and currently focused on earning a Doctorate Degree in this field. Aiming to leverage my experience and knowledge to effectively fill the nursing position at your hospital.


                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}

export default SectionExamples;
