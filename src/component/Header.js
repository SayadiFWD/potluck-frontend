// Libraries
import React from 'react';

// Components
import logo from './../assets/logo.png'

const Header = () => {
	return (
  <header>
    <img src={logo} alt='feast logo'/>
    <nav>
      <ul>
        <a href='#'><li>About</li></a>
        <a href='#'><li>Contact</li></a>
      </ul>
    </nav>
  </header>
  );
};

// class Header extends React.Component {
//   render(
//     return (
//     <div>
      
//     </div>
//     );
//   );
// };

export default Header;