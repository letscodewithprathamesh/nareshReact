import React from 'react'
import nana from '../../assets/nana.jpg'
import './about.css'

export default function About() {
  return (
    <section id="about" className="about--section">
      <div className="about--section--img">
        <img src={nana} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
        
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          My name is Prathamesh Yadav and I am from the beautiful city of Pune in the state of Maharashtra. I am proud to say that I have successfully completed my Bachelor's degree in Computer Science from the renowned Savitribai Phule Pune University. It was a challenging yet rewarding journey, and I feel fortunate to have gained a wealth of knowledge and skills that will help me excel in my career.
          </p>
          <p className="hero--section-description">
          I am passionate about coding and want to try new Technologies. I had worked on various porject which enhance my learning skill in different Domain.
          </p>
        </div>
      </div>
    </section>
  )
}
