import { Fragment } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
