import styled from "styled-components";

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    img {
        width: 50%;
    }
    @media screen and (max-width: 699px) {
       display: grid;
     img {
        width: 90%;
    }
    
    }

    @media screen and (min-width: 700px) and (max-width: 800px)  {
        display: grid;
      img {
         width: 70%;
     }
     
     display: flex;
    flex-wrap: wrap;
    justify-content: center;
     
     }

     @media screen and (min-width: 801px) and (max-width: 1200px) {
        img {
            margin-right: 5%;
            width:50%
        }
   
     
     }
`;

export const ProductInfo = styled.div`
    width: 40%;
    button {
        font-size: 1.2rem;
        font-weight: medium;
        padding: 0.8rem 1rem;
        cursor: pointer;
    border-color: #9F8772;

    }

    h3 {
        font-size: 2.2rem;
        margin: 0.8rem 0.8rem 1rem 0;

        
    }
    
    @media screen and (max-width: 699px) {
       display: block;

        width: 100%;
      
         
       }

       @media screen and (min-width: 700px) and (max-width: 800px) {
       
         width: 70%;
         margin-top: 2.5rem;
        
        }
     

   

       @media screen and (min-width: 801px) and (max-width: 1200px) {
        width: 50%
        
        
     
     }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0rem;

    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
        padding: 0rem 0.5rem;
    }
    p {
        width: 1.5rem;
        text-align: center;
        font-size: 1.2rem
    }
    span {
        color: var(--secondary);
        
    }
    svg {
        color: #494949;
    }

    @media screen and (max-width: 699px) {
        display: block;
 
         width: 100%;
       
        margin: 0.5rem 0rem;

          
        }
`;

export const Buy = styled.button`
    width: 100%;
    background: #665A48;
    color: white;
    font-weight: 500;
    margin: 2rem 0 0 0;
  
    
`;