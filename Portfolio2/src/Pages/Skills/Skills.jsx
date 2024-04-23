import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skill.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skills() {
  // Define different values for ProgressBar
  const frontendLabels = ["HTML", "CSS", "JS", "React"]; // Labels for frontend
  const frontendValues = [80, 70, 90, 60]; // Example values for frontend
  const backendLabels = ["JAVA", "SQL"]; // Labels for backend
  const backendValues = [50, 65]; // Example values for backend

  return (
    <section id='skills' className="skillcontainer">
      <div className='skilltitle'>
        <h1 className="skillheading">SKILLS</h1>
      </div>
      <div className="skill-section">
        <div className="frontend">
          <div className="heading">FRONTEND</div>
          {frontendValues.map((value, index) => (
            <div className="progress-wrapper" key={index}>
              <div className="label">{frontendLabels[index]}</div>
              <ProgressBar now={value} label={`${value}%`} style={{ width: '400px' }} />
            </div>
          ))}
        </div>
        <div className="backend">
          <div className="heading">BACKEND</div>
          {backendValues.map((value, index) => (
            <div className="progress-wrapper" key={index}>
              <div className="label">{backendLabels[index]}</div>
              <ProgressBar now={value} label={`${value}%`} style={{width: '400px'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
