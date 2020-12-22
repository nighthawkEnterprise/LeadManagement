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
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Our Mission</h2>
              <h4 className="description">
              To enhance each client’s natural beauty
              with the most advanced cosmetic and medical procedures
              that includes all of the services of a traditional salon and a leading-edge medical spa
              performed by an entrusted and energetic team
              of highly-trained, creative technicians and fully-accredited medical professionals
              in an upscale and inviting spa atmosphere
              where each client is treated as a favored client,
              has their service expectations surpassed,
              and leaves grateful for their Radiance experience.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
