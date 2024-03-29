import NavigationLinks from "../nav/NavigationLinks"
import { Container, Row, Col, Card } from "react-bootstrap"

export default function Tools() {
    return (
        <>
            <NavigationLinks />
            <Container className="mt-2">
                <Row>
                    <Col md='3'>
                        <Card>
                            <Card.Body>
                            <Card.Link href="/tools/special-character-checker"><Card.Title>Special Character Checker</Card.Title></Card.Link>
                                <Card.Text>Tool to check special characters and provide their equivalent unicode character</Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}