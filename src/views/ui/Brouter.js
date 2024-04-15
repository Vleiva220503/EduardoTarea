import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import brouter from "../../assets/images/bg/brouter.gif";

const Cards = () => {
  return (
    <div>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Brouter</CardTitle>
                <Row>
                  <Col md="8">
                    <CardText>
                      Un Brouter es un dispositivo que hace de puente y enruta
                      paquetes de datos entre redes de ordenadores. Los brouters
                      se utilizan para conectar dos o más redes informáticas y
                      enrutar los paquetes de datos entre ellas. Los brouters
                      suelen tener instaladas dos o más tarjetas de interfaz de
                      red (NIC), cada una de las cuales está conectada a una
                      red diferente. Los brouters utilizan un software especial
                      para examinar cada paquete de datos que pasa por el
                      dispositivo y determinar a qué NIC debe reenviarse el
                      paquete.
                    </CardText>
                    <CardText>
                      Los brouters se utilizan en diversas situaciones, como la
                      conexión de una red de área local (LAN) a Internet o la
                      conexión de dos LAN. Los brouters se utilizan a menudo en
                      entornos empresariales en los que es necesario conectar
                      varias redes de ordenadores. ¿Cuál es la diferencia entre
                      router y brouter? Un router es un dispositivo que conecta
                      dos o más redes informáticas y reenvía los datos entre
                      ellas. Un brouter es un dispositivo que combina las
                      características de un puente y un router. Es decir, actúa
                      como un puente.
                    </CardText>
                  </Col>
                  <Col md="4" className="text-center">
                    <CardImg src={brouter} alt="Brouter" />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
