import React, { useState } from "react";
import { Alert, Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import bri from "../../assets/images/bg/Bri.png";

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <Row className="justify-content-center align-items-center">
            <Col md="8">
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-bell me-2" />
                Bridge
              </CardTitle>
              <div>
                <Alert color="success">
                  <p>
                    Un bridge en redes es un dispositivo utilizado para conectar dos
                    redes locales (LAN) separadas, permitiendo que los dispositivos
                    de ambas redes se comuniquen entre sí. Su función principal es
                    filtrar y transmitir los paquetes de datos de una red a otra de
                    manera eficiente y segura.
                  </p>
                  <p>
                    El funcionamiento de un bridge se basa en la inspección de las
                    direcciones MAC (Media Access Control) de los dispositivos
                    conectados a cada red. Cada dispositivo tiene una dirección MAC
                    única que se utiliza para identificarlo en la red. El bridge
                    examina la dirección MAC de origen y destino de cada paquete de
                    datos que recibe y decide si debe transmitirlo o filtrarlo.
                  </p>
                  <p>
                    Cuando un dispositivo de una red envía un paquete de datos a
                    otro dispositivo de la misma red, el bridge no interviene y
                    permite que el paquete fluya directamente dentro de la red. Sin
                    embargo, cuando un dispositivo de una red envía un paquete de
                    datos a un dispositivo de la otra red, el bridge lo intercepta y
                    decide si debe transmitirlo o filtrarlo
                  </p>
                </Alert>
              </div>
            </Col>
            <Col md="4" className="text-center">
              <img src={bri} alt="Bridge" className="img-fluid" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Alerts;
