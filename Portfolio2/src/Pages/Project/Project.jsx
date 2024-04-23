import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from '../../assets/prj1.jpg';
import project2 from '../../assets/prj2.jpg';
import project3 from '../../assets/prj3.jpg';
import project4 from '../../assets/prj4.jpg';
import './project.css'

export default function Project() {
  const projects = [
    {
      title: "Project 1",
      description: "Movie App using React and Router",
      imageSrc: project1, // Import the image directly
      netlifyLink: "https://moviesearchapi10.netlify.app/"
    },
    {
      title: "Project 2",
      description: "Random Quote with DummyAPI",
      imageSrc: project2, // Placeholder image URL
      netlifyLink: "https://randomquote10.netlify.app/"
    },
    {
      title: "Project 3",
      description: "CountDown Timer",
      imageSrc: project3, // Placeholder image URL
      netlifyLink: "https://countdowntimer10.netlify.app/"
    },
    {
      title: "Project 4",
      description: "TODO List ",
      imageSrc: project4, // Placeholder image URL
      netlifyLink: "https://basic-todo1.netlify.app//"
    },
  ];

  return (
    <div id='project' className="projectcontainer">
      <div className="projectheading">
        <h1 className="projecttitle">PROJECTS</h1>
      </div>
      <div  className="project-list" >
      {projects.map((project, index) => (
        <Card key={index} style={{ width: '20rem',backgroundColor:'#C0C0C0' }}>
          <Card.Img variant="top" src={project.imageSrc} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.description}
            </Card.Text>
            <Button variant="primary" href={project.netlifyLink} style={{width:'80%',height:'40%'}}>View Project</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
    
  );
}
