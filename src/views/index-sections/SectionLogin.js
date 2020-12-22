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
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from 'axios';
// core components

function SectionLogin() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [body, setBody] = useState('');

  function registerButton() {
    console.log("HELLO", email, phoneNumber, firstName, lastName, body);
    const data =
    "username=zdemo&password=Zenoti@2010&grant_type=password&clientid=zdemo";
    const dataObj = {};
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
      responseType: "text",
    };
    console.log('data: ', data);
    console.log('config: ', config);
    axios
      .post(`https://api.zenoti.com/Token`, data, config)
      .then((response) => {
        const tokenKey = response.data;
        console.log("TOKEN: ", tokenKey);
        dataObj.tokenKey = tokenKey;
        return dataObj;
      }).then(async dataObj => {
         const sources = await getSources(dataObj);
         dataObj.leadSourceId = sources.lead_sources[2].id;
         console.log("DataObj.LeadSourcesID: ", dataObj.leadSourceId);
         return dataObj;
      }).then(async dataObj => {
          const centers = await getCenters(dataObj);
          dataObj.center = centers[1];
          console.log('centers: ', dataObj.center);
          dataObj.centerId = centers[1].id;
          return dataObj;
      }).then(async dataObj => {
          const guest= await createGuest(dataObj);
          dataObj.guest = guest[9];
          dataObj.guestId = dataObj.guest.id;
          return dataObj;
      }).then(async dataObj => {
          const employees = await getEmployees(dataObj);
          dataObj.employee = employees[1];
          dataObj.employeeId = employees[1].id;
          return dataObj;
      }).then(async dataObj => {
          const opp = await createOpp(dataObj);
      })
      setMessage("Message received! Thank you for signing up, we look forward to helping you with your beauty goals.");
  }

  async function createGuest(dataObj) {
    const config1 = {
      headers: {
        'application_name' : "zdemo",
        'application_version' : "11.43",
        'Authorization' : 'bearer ' + dataObj.tokenKey.access_token
      }
    }
    const data =
        {
            "center_id": `${dataObj.centerId}`,
            "personal_info": {
              "first_name": `${firstName}`,
              "last_name":  `${lastName}`,
              "mobile_phone": {
              "country_code": 95,
              "number": `${phoneNumber}`
            }
        }
      }
      console.log("CONFIG1: ", config1);
      console.log("DATAAAA: ", data);

    // return await axios.post(`https://api.zenoti.com/v1/guests`, data, config1)
    //   .then(res => {
    //     console.log("RES.DATA: ", res.data);
    //   }).catch(err => console.log(err));
    return await axios.get(`https://api.zenoti.com/v1/guests?center_id=${dataObj.centerId}`, config1)
      .then(res => {
        console.log('res.data: ', res.data);
        return res.data.guests;
      })
  }
  async function getSources(dataObj) {
    console.log("dataOBJ : ", dataObj);
    const config1 = {
      headers: {
        'application_name' : "zdemo",
        'application_version' : "11.43",
        'Authorization' : 'bearer ' + dataObj.tokenKey.access_token
      }
    }
    return await axios.get(`https://api.zenoti.com/v1/opportunities/metadata/all`, config1)
    .then(res => {
      console.log("RESPONSE: ", res);
      return res.data;
    })
  }
  async function getCenters(dataObj) {
    const config1 = {
      headers: {
        'application_name' : "zdemo",
        'application_version' : "11.43",
        'Authorization' : 'bearer ' + dataObj.tokenKey.access_token
      }
    }
    return await axios.get(`https://api.zenoti.com/v1/centers`, config1)
      .then(res => {
        // console.log("res.data:" , res.data);
        return res.data.centers
      })
    }
  async function getEmployees(dataObj) {
      const config1 = {
        headers: {
          'application_name' : "zdemo",
          'application_version' : "11.43",
          'Authorization' : 'bearer ' + dataObj.tokenKey.access_token
        }
      }
        return await axios.get(`https://api.zenoti.com/v1/centers/${dataObj.centerId}/therapists`, config1)
        .then(res => {
          console.log('res.data.therapists: ', res.data.therapists);
          return res.data.therapists;
        })

    }
  async function createOpp(dataObj) {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1);
    let date = tomorrow.getFullYear() + '-' + (tomorrow.getMonth()+1) + '-' + tomorrow.getDate();
    console.log('date: ', date);
    const config1 = {
      headers: {
        'application_name' : "zdemo",
        'application_version' : "11.43",
        'Authorization' : 'bearer ' + dataObj.tokenKey.access_token
      }
    }
    const data =
        {
            "center_id":dataObj.centerId,
            "opportunity_title": "Test Opp",
            "guest_id": dataObj.guestId,
            "created_by_id": dataObj.employeeId,
            "followup_date": date,
            "opportunity_description" : body,
            "type": "Sale Attempt",
            "opportunity_owner_id": dataObj.employeeId,
            "lead_source": {
              "id": dataObj.leadSourceId,
              "code": "CONSULT"
            }
        }
    return await axios.post(`https://api.zenoti.com/v1/opportunities`, data, config1)
      .then(res => {
        console.log("RES.DATA: ", res.data);
      })

  }



  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register" style={{maxWidth: "500px", width: "450px"}}>
                <h3 className="title mx-auto">{message === '' ? 'Welcome' : message }</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
              {message == '' ?
                (
                  <div>
                  <Form className="register-form">
                  <label>First Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-badge" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="First Name" type="text" value={firstName} onChange={e => setFirst(e.target.value)}/>
                  </InputGroup>
                  <label>Last Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-badge" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" value={lastName} onChange={e => setLast(e.target.value)} />
                  </InputGroup>
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                  </InputGroup>
                  <label>Phone Number</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Phone Number" type="number" value={phoneNumber} onChange={e => setPhone(e.target.value)}/>
                  </InputGroup>
                  <label>Tell us about you!</label>
                  <InputGroup className="form-group-no-border">
                    <textarea style={{width: 400, height: 300}} placeholder="What are you interested in? " type="Text" value={body} onChange={e => setBody(e.target.value)}/>
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                    onClick={() => registerButton()}
                  >
                    Sign Up
                  </Button>
                </Form>
                </div>
              ) : <div> </div> }

              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
