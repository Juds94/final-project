import "./Carousels.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carImg"
            src="https://www.lasportiva.com/media/Ambassador/Adam_Ondra_Change_9b_Hanshelleren_-_Flatanger_Norway__credits_Petr_Pavlicek_2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 carImg"
            src="https://gripped.com/wp-content/uploads/2021/01/Janja-Garnbret.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 carImg"
            src="https://www.telemadrid.es/2020/02/21/programas/el-partido-de-las-nueve/Alberto-Gines-escalador-olimpico-anos_2206589370_7564602_1300x731.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 export default ControlledCarousel