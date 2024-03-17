import React, {useState} from 'react';
import "./menue.css"
import { Link, useNavigate } from 'react-router-dom';
import { Close, MenuOpen, Phone } from '@mui/icons-material';
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };
    return (
      <header className="menu__wrapper">
        <div className="menu__bar">
          <a href="#" title="Home" aria-label="home" className="logo"><MenuOpen /> </a>
          <nav>
            <ul className="navigation hide">
              <li>
                <button>Our Services</button>
				<DropDownMenu />
              </li>
              <li>
                <a href="#docs" title="Docs">Docs</a>
				<DropDownMenu />
              </li>
              <li>
                <a href="#templates" title="Templates">Templates</a>
				<DropDownMenu />
              </li>
              <li>
                <a href="#customers" title="Customers">Customers</a>
				<DropDownMenu />
              </li>
              <li>
                <a href="#enterprise" title="Enterprise">Enterprise</a>
				<DropDownMenu />
              </li>
              <li>
                <a href="#pricing" title="Pricing">Pricing</a>
				<DropDownMenu />
              </li>
            </ul>
          </nav>
        </div>
        <div className="action-buttons hide">
          <a href="#log-in" title="Log in" className="secondary">Log In</a>
          <a href="#sign-up" title="Sign up" className="primary">Sign up</a>
        </div>
        <button aria-label="Open menu" className="burger-menu" type="button">
		  <MenuOpen />
		</button>
      </header>
    );
}

export default Header;
const DropDownMenu = ()=>{
  return(
	<div className="dropdown__wrapper">
	  <div className="dropdown">
		<ul className="list-items-with-description">
		  <li>
			<div className="item-title">
			  <h3>Previews</h3>
			  <p>Zero config, more innovation</p>
			</div>
		  </li>
		  <li>
			<div className="item-title">
			  <h3>Infrastructure</h3>
			  <p>Always fast always online</p>
			</div>
		  </li>
		  <li>
			<div className="item-title">
			  <h3>Next js</h3>
			  <p>The native Next.js platform</p>
			</div>
		  </li>
		  <li>
			<div className="item-title">
			  <h3>Edge Functions</h3>
			  <p>Dynamic pages, static speed</p>
			</div>

		  </li>
		  <li>
			<div className="item-title">
			  <h3>Analytics</h3>
			  <p>Real-time insights, peak performance</p>
			</div>
		  </li>
		  <li>
			<div className="item-title">
			  <h3>Storage</h3>
			  <p>Serverless storage for frontend</p>
			</div>
		  </li>
		</ul>
	  </div>
	</div>
  )
}
