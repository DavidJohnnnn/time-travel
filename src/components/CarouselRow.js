import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Wrapper class for Carousel rows

const CarouselRow = (props) => {
  return (
        <Container className="px-4">
          <h1>Lorem Ipsum</h1>
          <h4>Lorem IpsumvLorem IpsumLorem Ipsum</h4>
            <Row className="g-2">
                {props.children}
            </Row>
        </Container>
  );
}

export default CarouselRow;