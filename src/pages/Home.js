// import NavigationLinks from "../nav/NavigationLinks"
import { useState, useEffect, useCallback } from "react"
import { Container, Row, Col,  } from "react-bootstrap"
import NavigationLinks from "../nav/NavigationLinks";

export default function Home() {
    const [header, setHeader] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const headerString = "LINDON";
    let counter = 0;
 
    const handleInterval = useCallback(() => {
        
        counter++;
        if(counter > headerString.length +3) {
            setSubtitle('codes')
        }
        setHeader(headerString.substring(0, counter));
    }, [])

    useEffect(() => {
        const intervalID = setInterval(handleInterval, 300);
        return () => clearInterval(intervalID);
    }, [handleInterval])

    return (
        <>
            <Container style={{ height: '100vh', backgroundImage: 'url("/xxx.jpg")', padding:'0px'}} fluid>
                <NavigationLinks/>
                <Row className="align-items-center justify-content-center" style={{height: '90%'}}>
                    <Col xs='auto'>
                        <Row>
                            <Col><h1 className="mb-0">{header}</h1></Col>
                        </Row>
                        <Row className="justify-content-end">
                            <Col xs='auto'><p>{subtitle}</p></Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>
    )
}