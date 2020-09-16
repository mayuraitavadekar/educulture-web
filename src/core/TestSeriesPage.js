import React from "react";
import Menu from "./Menu";
import { Container, Row, Col, Button } from "react-bootstrap";

const TestSeriesPage = () => {
  return (
    <div>
      <Menu />

      <Container>
        <Row className="text-center">
          <Col>
            <h2>MPSC CSAT ऑनलाईन टेस्ट सिरीज (०१)</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h4 className="text-center">महत्त्वपूर्ण सूचना</h4>
            <br />
            <br />
            <ol>
              <li>
                टेस्ट सिरीज साठी पैसे भरण्या अगोदर लॉगिन/रजिस्टर करणे गरजेचे
                आहे.
              </li>
              <li>
                21 सप्टेंबर पासून 30 सप्टेंबर पर्यंत एक आड एक दिवस टेस्ट होईल.
                आणि त्याची लिंक तुम्हाला ई-मेल द्वारे पाठवण्यात येईल.
              </li>
              <li>
                आयोगाने ज्यावर focus केला आहे त्यावरच प्रश्न तयार केले आहेत.
              </li>
              <li>
                पहिले 4 पेपर आयोगापेक्षा +2 level असतील शेवटचा पेपर +1 level चा
                असेल. म्हणजे शेवटी आयोगाचा पेपर तुम्हाला काहीच वाटणार नाही.
              </li>
              <li>
                लिहून स्पष्टीकरण देण्यापेक्षा तुम्हाला प्रत्येक टेस्ट चे
                explanation lecture भेटेल. यामध्ये त्या त्या प्रश्नानुसार बरचसं
                बेसिक सुद्धा सांगण्यात येईल. आणि फक्त या कारणासाठीच टेस्ट
                महत्वाची आहे.
              </li>
              <li>
                टेस्ट सिरीज साठी फी १४९/- रुपये असेल. पैसे भरून टेस्ट
                मिळवण्यासाठी खाली Pay Now बटन वर क्लिक करा.{" "}
              </li>
              <li>
                पैसे भरल्यानन्तर तुम्हाला कॉन्फीर्मशन मेल पाठवण्यात येईल. आणि
                दिलेल्या तारखेला टेस्ट सिरीजसाठी लिंक पाठवण्यात येईल.
              </li>
              <li>
                तांत्रिक माहितीसाठी educulture.edtech@gmail.com यावर संपर्क
                साधावा.
              </li>
            </ol>
          </Col>
          <br />
          <br />
        </Row>
        <Row className="text-center">
          <Col>
            <Button variant="primary">Pay Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestSeriesPage;
