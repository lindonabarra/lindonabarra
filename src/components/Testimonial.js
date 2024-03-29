import { Card, Image, Row, Col, Placeholder } from 'react-bootstrap'

export default function Testimonial() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Row >
                    <Col xs='3'>
                        <Image src='/heroImage.jpg' style={{ width: '40px', height: '40px' }} roundedCircle fluid />
                    </Col>
                    <Col>
                        <Card.Title>
                            Lindon Abarra
                        </Card.Title>
                        <Card.Subtitle>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </Card.Subtitle>
                    </Col>
                </Row>
                {/* <Card.Text className=''>
                    He is honestly the best guy on earth hands down. I can't believe why I haven't met him earlier in my life.
                </Card.Text> */}
                <Placeholder as={Card.Text} animation='glow'>
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={3} /> <Placeholder xs={3} /> <Placeholder xs={4} /> {' '}
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} /> {' '}
                </Placeholder>
            </Card.Body>

        </Card>
    )
}