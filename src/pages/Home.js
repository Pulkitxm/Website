import React, { useEffect, useRef } from 'react';
import Typewriter from '../components/Typing';
import './pages.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import the images
import img1 from '../assets/logos/bootstrap.png';
import img2 from '../assets/logos/c.png';
import img3 from '../assets/logos/css.png';
import img4 from '../assets/logos/html.png';
import img5 from '../assets/logos/java.png';
import img6 from '../assets/logos/js.png';
import img7 from '../assets/logos/premeiere.png';
import img8 from '../assets/logos/py.png';
import img9 from '../assets/logos/react.png';

const Home = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    initializeInitialPositions();
    document.addEventListener('mousemove', parallax);
    document.querySelectorAll('.img-dingle').forEach((img) => {
      img.addEventListener('contextmenu', disableRightClick);
    });

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);

  function initializeInitialPositions() {
    imageRefs.current = document.querySelectorAll('.img-dingle');
  }

  function parallax(e) {
    imageRefs.current.forEach((move) => {
      const moving_value = move.getAttribute('data-value');
      const x = (e.clientX - move.offsetLeft) * moving_value / 900;
      const y = (e.clientY - move.offsetTop) * moving_value / 900;

      move.style.transform = `translate(${x}px , ${y}px)`;
    });
  }

  function disableRightClick(e) {
    e.preventDefault();
  }

  const pageTransition = {
    initial: { transform: 'translateY(100%)' },
    animate: {transform: 'translateY(0%)' },
    exit: { transform: 'translateY(-100%)' },
    transition: { duration: 2 },
  };

  return (
    <motion.div className="home" initial="initial" animate="animate" exit="exit" variants={pageTransition}>
    
      <div className='orange'></div>
      <div className='card'>
        <p>
          <span className='spani'>
            {'01'} <span className='spanarr'> {'<'}</span>
          </span>
          <Typewriter text='Hi! I am Pulkit' speed={100} />
          <span className='spani'>
            <span className='spanarr'> {'>'}</span>
          </span>
        </p>
        <p>
          <span className='spani'>
            {'02'} <span className='spanarr'> {'<'}</span>
          </span>
          <Typewriter text='I am a Frontend Web Developer' speed={100} />
          <span className='spani'>
            <span className='spanarr'> {'>'}</span>
          </span>
        </p>
        <p>
          <span className='spani'>
            {'03'} <span className='spanarr'> {'<'}</span>
          </span>
          <Typewriter text='Video Editor and Tech. Enthusiast' speed={100} />
          <span className='spani'>
            <span className='spanarr'> {'>'}</span>
          </span>
        </p>
      </div>
      <div className='subtext' style={{ zIndex: 1 }}>
        <Link to={'/about'}>
          <h2>know more about me</h2>
        </Link>
      </div>
      <div className='imgs'>
        <img src={img1} draggable='false' className='img-dingle' data-value='-4' alt='' style={{userSelect:"none"}}  />
        <img src={img2} draggable='false' className='img-dingle' data-value='6' alt='' style={{userSelect:"none"}}  />
        <img src={img3} draggable='false' className='img-dingle' data-value='4' alt='' style={{userSelect:"none"}}  />
        <img src={img4} draggable='false' className='img-dingle' data-value='-6' alt='' style={{userSelect:"none"}}  />
        <img src={img5} draggable='false' className='img-dingle' data-value='8' alt='' style={{userSelect:"none"}}  />
        <img src={img6} draggable='false' className='img-dingle' data-value='-4' alt='' style={{userSelect:"none"}}  />
        <img src={img7} draggable='false' className='img-dingle' data-value='5' alt='' style={{userSelect:"none"}}  />
        <img src={img8} draggable='false' className='img-dingle' data-value='-9' alt='' style={{userSelect:"none"}}  />
        <img src={img9} draggable='false' className='img-dingle' data-value='-5' alt='' style={{userSelect:"none"}}  />
      </div>
    </motion.div>
  );
};

export default Home;