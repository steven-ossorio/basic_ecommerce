import { Fragment, useContext } from "react";

import { Link, Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <LogoContainer to="/">Logo</LogoContainer>
      <NavigationContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
        </NavLinks>
        {currentUser ? (
          <NavLink as="span" onClick={signOutUser}>
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="/signin">Sign In</NavLink>
        )}
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
