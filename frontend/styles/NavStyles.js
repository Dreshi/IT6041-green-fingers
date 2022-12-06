import styled from "styled-components";

export const NavStyles = styled.nav`
    min-height: 15vh;
    justify-content: space-between;
    display: flex;
    align-items: center;
    font-size: 1rem;
    a {
        font-size: 1.2rem;
    }
}
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    div {
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3 {
        font-size: 1rem;
        padding: 0.25rem;
    }
    svg {
        font-size:3rem;
        color: #5F7161;
        margin: 5px 0px
    }
    span {
        background: #ff2626;
        color: white;
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 0.75rem;
        position: absolute;
        right: -10%;
        top: -20%;
        pointer-events: none;
    }

    .loginImg {
        width: 50px;
        height: auto;
        margin: 5px 0px

     }

     .greenlogo {
        width:100%;
        height:auto;
     }
   

    @media screen and (max-width: 600px) {

        .loginImg{
            width: 40%;
            height: auto;
            margin: 20px 0 0 0
         }
       
        svg {
            font-size: 2rem;
            margin: 10px 0 0 0
        }

        div {
            margin: 1px; 
            padding: 0px 2px;
            align-items:flex-end;

            
           
        }

        h3 {
            font-size: 0.8rem;
            padding: 0;
            margin: 3px 0 0px 0;
            width: 90%;
            text-align: end;
        }

        display: block;
        align-items: center;
       
        
      }

      

    

      
`;