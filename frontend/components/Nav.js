import Link from "next/link";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import logo from "../public/greenfingers.png";
import { useUser } from "@auth0/nextjs-auth0";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const { user, error, isLoading } = useUser();
    return (
        <NavStyles>
               <Link href={"/"}><Image src={logo} alt="greenlogo" width={220}className="greenlogo" /></Link>
            <NavItems>
     
            <User />
            <div onClick={() => setShowCart(true)} className="navlogo">
                {totalQuantities > 0 && (
                    <motion.span animate={{scale: 1}} initial={{scale: 0}}>
                        {totalQuantities}
                    </motion.span>
                    )}
                <FiShoppingBag />
                <h3>Cart</h3>
                    </div>
                  
        </NavItems>
        <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
    );
}