import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">Logo</div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/signin">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
