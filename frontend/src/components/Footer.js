import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                    <Row>
                        <Col className ='text-center py-3 footerstyl'>
                            Copyright &copy; RetailMart
                        </Col>
                    </Row>
            </Container>
        </footer>
    )
}

export default Footer
