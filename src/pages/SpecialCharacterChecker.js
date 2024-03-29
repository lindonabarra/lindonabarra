import { useState } from "react"
import NavigationLinks from "../nav/NavigationLinks"
import { Container, Form, Button, Row, Col, Modal, Table} from "react-bootstrap"

export default function SpecialCharacterChecker() {
    const [modalShow, setModalShow] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [specialCharacters, setSpecialCharacters] = useState([]);

    function CenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Special Characters
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Character</th>
                                <th>Unicode Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {specialCharacters.map((specialCharacter, index) => (
                                <tr>
                                    <td>{specialCharacter.character}</td>
                                    <td>{specialCharacter.unicode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            <NavigationLinks />
            <Container>
                <Form className='mt-2' onSubmit={(e) => { e.preventDefault(); }}>
                    <textarea className='form-control mt-2' rows={10} value={textInput} onChange={e => setTextInput(e.target.value)}></textarea>
                    <Row className='justify-content-end'>
                        <Col md='auto'>
                            <Button type='submit' className='mt-2' onClick={checkForSpecialCharacters}>Submit</Button>
                        </Col>
                    </Row>
                </Form>

                <CenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>
        </>
    )

    function checkForSpecialCharacters() {
        let scArray = [];
        for (let i = 0; i < { textInput }.textInput.length; i++) {
            if ({ textInput }.textInput.charCodeAt(i) > 127) {
                if (!scArray.some(specialCharacter => specialCharacter.character === { textInput }.textInput.charAt(i))) {
                    scArray.push({ 'character': { textInput }.textInput.charAt(i), 'unicode': { textInput }.textInput.codePointAt(i).toString(16) })
                } 
            }
        }
        setSpecialCharacters(scArray);
        setModalShow(true)
    }
}