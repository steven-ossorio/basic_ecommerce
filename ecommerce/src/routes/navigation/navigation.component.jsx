import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

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
