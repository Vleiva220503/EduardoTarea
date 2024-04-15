import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
import concen from "../../assets/images/bg/concen.gif";

const Grid = () => {
  return (
    <div>
      <Card>
        <CardTitle tag="h1" className="border-bottom p-3 mb-0">
          Concentrador
        </CardTitle>
        <CardBody>
          <Row>
            <Col xs="12" md="8">
              <div>
                <h5>
                  Un concentrador, comúnmente denominado hub en inglés, es un
                  componente esencial en la infraestructura de redes de
                  computadoras que desempeña un papel crucial en la
                  interconexión de dispositivos dentro de una red local.
                  Funcionando en la capa física del modelo OSI, su principal
                  función radica en servir como un punto central donde múltiples
                  dispositivos pueden conectarse para comunicarse entre sí.
                </h5>
                <h5>
                  En términos más extensos, un concentrador actúa como un
                  distribuidor de datos dentro de una red, permitiendo que los
                  dispositivos conectados intercambien información entre sí.
                  Este dispositivo opera en una topología de red en estrella,
                  donde todos los dispositivos están conectados directamente al
                  concentrador central.
                </h5>
                <h5>
                  Su funcionamiento se basa en la recepción y retransmisión de
                  datos. Cuando un dispositivo conectado al concentrador envía
                  datos, el concentrador los recibe en uno de sus puertos y los
                  transmite a todos los demás puertos, excepto al puerto de
                  origen. Esto implica que todos los dispositivos conectados al
                  concentrador reciben los datos enviados por cualquier otro
                  dispositivo conectado.
                </h5>
              </div>
            </Col>
            <Col xs="12" md="4">
              <img src={concen} alt="Concentrador" className="img-fluid" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Grid;
