import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <div className="container-fluid">
                <NavbarBrand href="/">Mi Sitio</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar}>
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{
                            transition: 'transform 0.3s ease',
                            transform: isOpen ? 'rotate(90deg)' : 'none'
                        }}
                    />
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/inicio">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/acerca">Acerca</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/servicios">Servicios</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contacto">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default NavMenu;
