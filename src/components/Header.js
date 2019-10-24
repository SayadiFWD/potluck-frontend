// Libraries
import React from "react";

// Components
import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="feast logo" />
      <nav>
        <ul> {/* re-add <a>s */}
          <li>About</li>
          <li>Contact</li>
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
