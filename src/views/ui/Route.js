import { Badge, Button, Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import rout from "../../assets/images/bg/rout.jpg";

const Badges = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h1" className="border-bottom p-3 mb-0">
              Router
            </CardTitle>
            <CardBody className="">
              <Row>
                <Col xs="12" md="4">
                  <img src={rout} alt="Router" className="img-fluid" />
                </Col>
                <Col xs="12" md="8">
                  <div>
                    <h5>
                      Los routers guían y dirigen los datos de red mediante
                      paquetes que contienen varios tipos de datos, como
                      archivos, comunicaciones y transmisiones simples como
                      interacciones web. Los paquetes de datos tienen varias
                      capas o secciones; una de ellas transporta la información
                      de identificación, como emisor, tipo de datos, tamaño y,
                      aún más importante, la dirección IP (protocolo de
                      Internet) de destino. El router lee esta capa, prioriza
                      los datos y elige la mejor ruta para cada transmisión.
                    </h5>
                    <h5>
                      En pocas palabras, un router conecta dispositivos dentro
                      de una red reenviando paquetes de datos entre ellos. Esta
                      información puede enviarse entre dispositivos o desde
                      dispositivos a Internet. El router hace esto asignando
                      una dirección IP local a cada uno de los dispositivos en
                      la red. Esto garantiza que los paquetes de datos terminen
                      en el lugar correcto, en lugar de perderse dentro de la
                      red.
                    </h5>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Badges;
