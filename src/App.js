import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import "./App.css";
import {useState } from "react";
import inputData from './input.json';
function App() {
const [inputdata,setInputdata]= useState({inputData});
const keydata= Object.keys(inputData);

const generatejson =()=>{
  // alert(1);
  const keytrue ={};//Blank object
  const keyreverified ={};//Blank object
  for(const key of keydata){
    keytrue[key]=true;// Here i have store key and value "Name":"true"
    keyreverified[key]='reverified';// Here i have store key and value "Name":"reverified"
  }
 
  const updatedJsonData =[{... inputdata.inputData},{... keytrue},{ ... keyreverified}]// Here i have store all data in one variable
  const jsonString = JSON.stringify(updatedJsonData, null, 2);

    // Create a Blob object from the JSON string
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a download link for the JSON file
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "output.json";
    downloadLink.innerHTML = "Download JSON";

    // Append the download link to the page
  const downloadContainer = document.getElementById('download-container');
  downloadContainer.innerHTML = '';
  downloadContainer.appendChild(downloadLink);
  // console.log(updatedJsonData);
  
}
// console.log(inputdata);
  return (
    <>
      <div
        style={{
          // background: "#eef1f5",
          width: "100%",
          // height: "100vh",
          padding: "20px 25px 0px 25px",
        }}
      >
        <div
          style={{ backgroundColor: "#fff", padding: "10px 25px 20px 25px" }}
        >
          {/* {Object.entries(inputData)} */}
          <Row style={{justifyContent:'space-between'}}>
            <Col>
              <Form.Label column="lg" lg={8}>
                City
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
              {inputdata.CITY}
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>


          <Row style={{justifyContent:'space-between'}}>
            <Col>
              <Form.Label column="lg" lg={8}>
                NAME
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
              {inputdata.NAME}
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>



          <Row style={{justifyContent:'space-between'}}>
            <Col>
              <Form.Label column="lg" lg={8}>
                STAR
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
              {inputdata.STAR}
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>


          
          <Row style={{justifyContent:'space-between'}}>
            <Col>
              <Form.Label column="lg" lg={8}>
                ADDRESS
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={80}>
              {inputdata.ADDRESS}
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>


          
          <Row style={{justifyContent:'space-between'}}>
            <Col>
              <Form.Label column="lg" lg={8}>
                PHONE NO
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
              {inputdata.PHONE_NO}
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>


          
          <Row style={{justifyContent:'space-between'}}>
            <Col >
              <Form.Label column="lg" lg={8}>
              HOTEL COUNTRY
              </Form.Label>
            </Col>

            <Col >
              <Form.Label column="lg" lg={8}>
              {inputdata.HOTEL_COUNTRY}
              </Form.Label>
            </Col>

            <Col >
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col >
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>


          
        </div>

        
      </div><div
        style={{
          // background: "#eef1f5",
          width: "100%",
          // height: "100vh",
          padding: "20px 25px 0px 25px",
        }}
      >
        <div
          style={{ backgroundColor: "#fff", padding: "10px 25px 20px 25px" }}
        >
          {/* {Object.entries(inputData)} */}
          <Row style={{justifyContent:'space-between'}}>
            <Col>
              <Form.Label column="lg" lg={8}>
              LEADER CITY
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
              {inputdata.LEADER_CITY}
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>


          <Row style={{justifyContent:'space-between'}}>
            <Col>
              <Form.Label column="lg" lg={8}>
              LEADER NAME
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
              {inputdata.LEADER_NAME}
              </Form.Label>
            </Col>

            <Col>
              <Form.Label column="lg" lg={8}>
                <Form.Check type="switch" id="custom-switch" label="No" />
              </Form.Label>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Remark" />
            </Col>
          </Row>


          <div style={{display:'flex'}}>
          <Button variant="success" onClick={generatejson}>Generate JSON Output</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp; 
          <div id="download-container"></div>
          </div>

          
        </div>

        
      </div>
    </>
  );
}

export default App;
