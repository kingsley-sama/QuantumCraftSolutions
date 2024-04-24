import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"
import DownBar from './root/bottom_bar';
import Header from './nav/menue';
import { Money, MoneyOutlined, RemoveRedEye } from '@mui/icons-material';
import Cards from './components/projects';
import Profile from './components/our_team';
import TeamQC from './components/our_team/slidder';
function App() {

    const [toggle, setToggle] = useState(false);
    return (
        <div className='App'>
        <Router >
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
            </Routes>
         <DownBar />
      </Router>            
        </div>
    );
}

export default App;

const Body = () =>
 {
  return (
    <div>
      <div className="parallax-image parallax-image-01">
        <div className='contents'>
          <h1>Quantum Crafts Computing</h1>
          <h3>WE SEAMLESSLY BUILD FOR DURABILITY</h3>
          <button>Email Us</button>
        </div>
      </div>
      <section id='about-us'>
        <h2>Who Are We</h2>
        <p> abo. Aliquam in lorem sit amet are ac, nonummy non, lobortis a enim. Cras elementum. Phasellus faucibus molestie nisl.</p>
        <p>Nulla inceptos hymenaeos. Aenean vel massa quis mauris vehicula lacinia. Aliquam id dolor.</p>
        <p>Integer tempor. eserunt mollit anim id est laborum. Vivamus porttitor turpis ac leo. istique tellus amet .</p>
        <h2>Meet Our Team</h2>
        <TeamQC />
      </section>
      <div className="parallax-image parallax-image-02"></div>
      <section>
        <h2>Our Projects</h2>
        <Cards />
        {/* Repeat the content for each section */}
      </section>
      <div className="parallax-image parallax-image-03">
      <div className='our_services'>
      <h2>Our Portfolio</h2>
		  <div>
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
		  </div>

		</div>
      </div>
      <section>
        <h2>Our Projects</h2>
        {/* Repeat the content for each section */}
      </section>
    </div>
  );
 }
const AboutUs = ({project_name, image, id, link})=>{
  return(
	<div className='about_us'>
	  <h3>Effective</h3>
	  <div className='line'><div></div></div>
    <RemoveRedEye  style={{fontSize:"70px", marginTop:"15px", marginBottom:"15px"}}/>
    <p>Heloo world to my friends in the internet</p>
	</div>
  )
}
  
