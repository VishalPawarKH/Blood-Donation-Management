import Base from "../components/Base";
import { Container, Row, Col, Carousel, ListGroupItem } from "react-bootstrap";
import { Card, CardBody, CardText, CardHeader, ListGroup } from "reactstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUpcomingEventsHandler } from "../Features/user/userSlice";
import './Home.css';

const Home = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
    useEffect(() => {
      getAllUpcomingEvents();
    }, []);


const getAllUpcomingEvents=()=>{
  dispatch(getAllUpcomingEventsHandler())
  .then((response) => {
    console.log(response.data)
    setData(response.data);
  })
  .catch((err) => {});
}


  return (
    <div>
      <Base>
        {/* Updated Carousel - Added text description in a minimalistic design */}
        <div className="custom-carousel">
          <Carousel interval={2000}> 
            <Carousel.Item>
              <div className="carousel-item-content">
                <h3 className="carousel-title">Help to make a Difference in our Society</h3>
                <p className="carousel-description">Join us in this Initiative!</p>
              </div>
            </Carousel.Item>
            
            
          </Carousel> 
        </div>

        {/* Section for Benefits of Donation */}
        <Card className="benefits-card shadow-lg rounded" style={{ borderTop: '3px solid #00bcd4' }}>
          <CardHeader
            className="benefits-card-header"
          >
            Why Donate Blood?
          </CardHeader>
          <ListGroup>
            <ListGroupItem className="benefits-list-item">
              <CardText>
                Donating blood may reduce the risk of heart diseases.
              </CardText>
             
              <CardText>
                You can donate on regular basis to help humankind!
              </CardText>
              <CardText>
                You can donate blood every 12 weeks.
              </CardText>
            </ListGroupItem>
          </ListGroup>
        </Card>

        {/* Upcoming Events Carousel */}
        <div className="events-carousel">
          <Carousel interval={3500}>
            {data.map((item) => (
              <Carousel.Item key={item.id}>
                <div className="event-card-container">
                  <h3 className="event-title">{item.title}</h3>
                  <p className="event-description">{item.description}</p>
                  <div className="event-details">
                    <p><strong>Start Date:</strong> {item.eventStartDate} at {item.eventStartTime}</p>
                    <p><strong>End Date:</strong> {item.eventEndDate} at {item.eventEndTime}</p>
                    <p><strong>Venue:</strong> {item.venue}</p>
                    <p><strong>City:</strong> {item.city}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* "Did You Know?" Section */}
        <Card className="info-card shadow-lg rounded" style={{ backgroundColor: "#f5f5f5", borderTop: '3px solid #ff5722' }}>
          <CardHeader
            className="info-card-header"
          >
            Did You Know?
          </CardHeader>
          <CardBody>
            <CardText>
              Every 2 Seconds, someone in the country needs blood.
            </CardText>
            <CardText>
              Every year, about 4 to 5 Crore units of blood are needed nationwide.
            </CardText>
            <CardText>
              However, only 5 Lakh units are currently available.
            </CardText>
          </CardBody>
        </Card>
      </Base>
    </div>
  );
};

export default Home;
