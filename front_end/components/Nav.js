import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";

export default function Nav() {
  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div>
          <GiShoppingCart />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <Cart />
    </NavStyles>
  );
}
