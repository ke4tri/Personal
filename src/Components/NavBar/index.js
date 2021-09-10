import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Wayne Collier</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                        <Nav.Link href="News">News</Nav.Link>
                        <Nav.Link href="Games">Games</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;