import React, { useEffect ,useState} from 'react'
import bg from '../../assets/me.png';
import btnImg from '../../assets/btnImg.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import resume from '../../assets/resume.pdf'


export default function Home()
{

  const words = ["Java Developer", "React Developer", "Software Engineer", "SQL Developer  "];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
      setCurrentWord(words[currentWordIndex]);
    }, 2500); // Change word every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentWordIndex]); // Run effect only once on component mount


  return (
    <section id='home'>
     <div className='introContent'>
  <div>
    <span className='introtext'>I'm </span><span className='introName'>Prathamesh Yadav,</span>
  </div>
  <div>
    <span className='introtext'>I'm </span><span className='change'>{currentWord}</span>
  </div>
  <p className='IntroPara'>
  I am a skilled  Software Engineer who can help to make Websites using different technologies such as HTML,CSS and Javascript and good command of the React Js library for making seamless and Optimized Web pages which will get a better user Experience.
  </p>
  
    <a href={resume} download="Resume">
      <button className='btn-hire'>
      <img src={btnImg} alt="Hireme" className='btnImg'/>
      Resume
    </button>
    </a>
    

</div>

    <img src={bg} alt="Profile"  className='bg'/>

    </section>
    

  )
}
