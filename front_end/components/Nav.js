import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <GiShoppingCart />
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}
