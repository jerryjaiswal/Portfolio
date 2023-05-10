import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ItemCard } from "./ItemCard";
import projImg1 from "../assets/img/product-img519.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import distance_tracking from "../assets/img/distance_tracking.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import kreiva from "../assets/img/kreiva.jpg";
import obscura from "../assets/img/obscura.png";
import sphere from "../assets/img/sphere.png";
import google from "../assets/img/google.jpg"
import cerebro from "../assets/img/cerebro.jpg"

import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects = () => {


  const por = [
    {
      title: "President",
      description: "The Cultural Committee, IIIT Vadodara",
      imgUrl: projImg1
    },
    {
      title: "Joint Secretary",
      description: "Obscura Photography Club, IIIT Vadodara",
      imgUrl: obscura
    },
    {
      title: "Core Lead - Kreiva",
      description: "The Annual Cultural Fest, IIIT Vadodara",
      imgUrl: kreiva
    },

  ]

  const certificates = [
    {
      title: "Foundation of Product Management",
      description: "Google Certified Course",
      imgUrl: google
    },

    {
      title: "Pixise Co-Convenor | Cerebro",
      description: "Photography Event of IIIT Vadodara",
      imgUrl: cerebro
    },
  ]

  const projects = [
    {
      title: "Distance Tracking | Android Project",
      description: "This is an app that allows users to monitor the distance they have traveled and share their travel time and distance on various social media platforms.",
      imgUrl: distance_tracking
    },
    {
      title: "Sphere | Android Front-End Project",
      description: "I have developed a user interface and wireframe for a cryptocurrency app that provides currency and crypto-currencies exchange rates and trading and business news, utilizing XML.",
      imgUrl: sphere
    },
  ]



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="project" id="experience">
      <Container>
        <Row>
          <Col size={12}>s
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">PoR</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            por.map((project, index) => {
                              return (
                                <ItemCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ItemCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }

                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            certificates.map((project, index) => {
                              return (
                                <ItemCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }

                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
