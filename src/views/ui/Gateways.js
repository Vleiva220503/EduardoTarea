import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import gate from "../../assets/images/bg/gate.jpg";

const Buttons = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardBody className="d-flex flex-column flex-md-row align-items-center">
              <div>
                <CardTitle tag="h4" className="border-bottom p-3 mb-0">
                  Gateway
                </CardTitle>
                <h5>
                  Una Gateway es un punto de enlace entre dos redes que, de otro
                  modo, estarían separadas. Actúa como punto de control de acceso
                  y posibilita las comunicaciones entre redes diferentes,
                  permitiéndoles intercambiar información. Es un componente
                  esencial de las redes, ya que facilita el flujo de datos de una
                  red a otra. Al actuar como puente entre dos o más redes, una
                  pasarela puede ayudar a conectar una LAN a una WAN, o una LAN a
                  Internet.
                </h5>
                <h5>
                  Una Gateway es un punto de enlace entre dos redes que, de otro
                  modo, estarían separadas. Actúa como punto de control de acceso
                  y posibilita las comunicaciones entre redes diferentes,
                  permitiéndoles intercambiar información. Es un componente
                  esencial de las redes, ya que facilita el flujo de datos de una
                  red a otra.
                </h5>
                <h5>
                  Al actuar como puente entre dos o más redes, una pasarela puede
                  ayudar a conectar una LAN a una WAN, o una LAN a Internet.
                  Además, las pasarelas pueden proporcionar funciones adicionales,
                  como protección de cortafuegos, traducción de direcciones de red
                  y otras funciones de seguridad. En este artículo veremos qué es
                  una pasarela y cómo funciona, así como para qué puede
                  utilizarse.
                </h5>
              </div>
              <div className="ml-md-auto">
                <img src={gate} alt="Gateway" className="img-fluid" />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Buttons;
