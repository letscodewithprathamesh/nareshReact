import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
        <Row>
          <img src="https://i.pinimg.com/564x/3f/e4/00/3fe400764488bd89cc46f963215faedf.jpg" alt="" />
        </Row>
        </Col>
        <Col><p>Peter Parker’s gifts from the spider bite include enhanced strength, stamina, and agility, as well as the ability to cling to nearly any surface by his hands and feet, and an internal “alarm” of sorts that warns him of impending danger. When in costume he becomes a figure in motion, leaping and jumping about with a steady stream of wisecracks.
          The Spider-Man suit designed by Tony Stark includes wrist-worn web-shooters (adapted from Peter’s own invention) that emit lines of synthetic “webbing” capable of supporting great weight with a high-degree of holding power. In addition, the suit provides various optical powers, a voice-changer, a drone tracking device, and some protection against outside elements. When not in use, the suit appears as loose, thin cloth, but when donned, it adheres tightly to the body and stretches easily to almost any movement by the wearer.
          Recently, Parker acquires a specialized suit of armor from Stark that features many qualities of the inventor’s own Iron Man suits, including enhanced protective layering, optics, internal air supply, along with a set of four spider-like extra “arms” that answer to the teenager’s mental commands.</p>

         <div className='d-flex justify-content-center gap-5'>
          <Button variant="primary">See My Resume</Button>
          <Button variant="success">Contact Me</Button>
          </div> 
          
          
          </Col>
      </Row>
    </Container>
  )
}
