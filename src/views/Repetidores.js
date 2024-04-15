import { Col, Row, NavbarText } from "reactstrap";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/Repetidor.jpg";
import bg2 from "../assets/images/bg/Digital.jpg";
import bg3 from "../assets/images/bg/Fibra.jpg";
import bg4 from "../assets/images/bg/radio.jpg";
import bg5 from "../assets/images/bg/micro.jpg";

const BlogData = [
  {
    image: bg1,
    title: " Repetidor analógico",
    subtitle: "",
    description:
      "Un repetidor analógico es un dispositivo que recibe una señal de radio débil, la amplifica y la retransmite a una frecuencia diferente para extender su alcance. Actúa como  un amplificador de radio, mejorando la cobertura y la calidad de la señal en áreas con recepción deficiente.",
  },
  {
    image: bg2,
    title: "Repetidor Digital",
    subtitle: "",
    description:
      "Un repetidor digital es un dispositivo que recibe una señal de radio digital, la decodifica, la procesa y la retransmite a una frecuencia diferente para extender su alcance. A diferencia de los repetidores analógicos, que simplemente amplifican la señal",
  },
  {
    image: bg3,
    title: "Repetidor de fibra óptica",
    subtitle: "",
    description:
      "Un repetidor de fibra óptica supera la atenuación restaurando el pulso de luz a su fuerza original antes de enviarlo al siguiente tramo de la línea de red. En las redes de fibra óptica, los filamentos muy delgados de alambre de vidrio transmiten pulsos de luz. Estos pulsos de luz están en las longitudes de onda del infrarro",
  },
  {
    image: bg4,
    title: "Repetidor de radioaficionado",
    subtitle: "",
    description:
      "Un repetidor de radioaficionado es un equipo que utilizan los operadores de radioaficionados para amplificar las señales de radiofrecuencia (RF), lo que permite a los operadores comunicarse más allá de lo que permitirían las transmisiones de radio a radio.",
  },
  {
    image: bg5,
    title: "Repetidor de microondas",
    subtitle: "",
    description:
      "Los repetidores de microondas son dispositivos que se utilizan para extender el alcance de una señal de microondas. Funcionan amplificando y redireccionando la señal, lo que permite que viaje distancias más largas sin perderse o debilitarse.",
  },
];

const Repetidores = () => {
  return (
    <div className="text-center">
      <NavbarText
        className="mx-auto text-md-start"
        style={{ color: "black", fontSize: "18px" }}
      >
        Repetidores
      </NavbarText>
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};


export default Repetidores;
