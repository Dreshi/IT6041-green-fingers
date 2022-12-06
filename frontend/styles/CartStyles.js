import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
    width: 40%;
    background: #f1f1f1;
    padding: 2rem 5rem;
    overflow-y: scroll;
    position: relative;

    @media screen and (max-width: 699px) {
        width:70%;
        padding: 0rem 2rem;
        h3 {
            font-size: 1rem;
            padding: 0.5rem 0;
        }
        div span {
            margin: 0;
        }
     
     }

     @media screen and (min-width: 700px) and  (max-width: 1000px) {
        width:60%;
        padding: 0rem 2rem;
        h3 {
            font-size: 1rem;
            padding: 0.5rem 0;
        }
        div span {
            margin: 0;
        }
     
     }

     @media screen and (min-width: 1001px) and  (max-width: 1300px) {
        width:60%;
      
     
     }

   
`;

export const Card = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    padding: 2rem;
    margin: 2rem 0rem;
    img {
        width: 8rem;
    }

    @media screen and (max-width: 699px) {
        display: flex;
        padding: 0.5rem 1.2rem;
        flex-direction: column;
        img {
            width: 10rem;
        }

     }
   
`;

export const CardInfo = styled(motion.div)`
    width: 80%;
    div {
        display: flex;
        flex-direction: space-between;
    }
`;

export const EmptyStyle = styled(motion.div)`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;
    h1 {
        font-size: 2rem;
        padding: 2rem;
    }
    svg {
        font-size: 10rem;
        color: var(--secondary);
    }
`;

export const Checkout = styled(motion.div)`
    button{
        background: var(--primary);
        padding: 1rem 2rem;
        width: 100%;
        color: white;
        font-size: 1.3rem;
        margin-top: 2rem;
        cursor: pointer;
        border: none;
    cursor: pointer;

    }
`;

export const Cards = styled(motion.div)`



`;