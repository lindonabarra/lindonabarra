import { Navbar, Container, Nav } from "react-bootstrap"
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Tools from "../pages/Tools";
import SpecialCharacterChecker from "../pages/SpecialCharacterChecker";

export default function NavigationLinks() {
    return (
        <Navbar bg="light" data-bs-theme="light" >
            <Container>
                <Navbar.Brand href="/">Lindon Abarra</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/tools">Tools</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/tools/special-character-checker' element={<SpecialCharacterChecker />} />
        </Route>
    )
);