import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header
      <Link to="/">Home</Link>
      <Link to="/signin">sign in</Link>
    </div>
  );
};

export default Header;
