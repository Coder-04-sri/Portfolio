import React from 'react'
import '../App.css';

function Home() {
  return (
    <>
    
      <div className="Navbar">

        <div className='logo'>Portfolio</div>

        <div className='link_box'>
          <a className='link' href="#Home">Home</a>
          <a className='link' href="#About">About</a>
          <a className='link' href="#Projects">Projects</a>
          <a className='link' href="#Experience">Experience</a>
          <a className='link' href="#Contact">Contact</a>
        </div>

      </div>

      <section className="container1" id='Home'>

        <div className='Home-Container'>

          <p className='Hii' data-aos="zoom-in">Hii I'm</p>

          <div className='name'>
            <h1 data-aos="fade-up" className='letters'>VANISRI</h1>
          </div>

          <div data-aos="fade-up" className='designation'>
            <h2 className='letters'>Web Developer</h2>
          </div>

          <p data-aos="fade-up" className='intro'>
            Passionate about Web Development and UI Design
          </p>

          <div className='buttons'>
         <a data-aos="fade-up"  className='btn btn1' href="tel:919025901181">Hire me</a>
            <a data-aos="fade-up"  className='btn btn1' href="#Projects">Projects</a>
          </div>

        </div>

      </section>

    </>
  )
}

export default Home