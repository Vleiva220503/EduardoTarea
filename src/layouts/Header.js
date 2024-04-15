import React from "react";
import {
  Navbar,
  Button,
  NavbarText
} from "reactstrap";


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md" className="bg-gradient">
      <div className="d-flex align-items-center">
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>   
      {/* Texto "Dispositivos de Interconexión de Redes" */}
      <NavbarText className="mx-auto text-center text-md-start" style={{ color: 'black', fontSize: '18px' }}>Dispositivos de Interconexión de Redes</NavbarText>
    </Navbar>
  );
};

export default Header;
