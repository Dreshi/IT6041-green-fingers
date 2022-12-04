import styled from "styled-components";

export const ProductStyles = styled.div`
    background-color: #F2F2F2 ;
    position: relative;
    
    flex-direction: column;
    padding: 1.6rem;
    img {
        width: 100%;
        cursor: pointer;
    }
    h2 {
        padding: 1.5rem 0rem 1rem; 0rem
    }
    h3{
        font-size: 1.2rem;
        color: #5F7161;
        padding: 0rem 0 0rem 0;
      }

      .image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
      }
      
      .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
      }
      
      .container:hover .image {
        opacity: 0.3;
      }
      
      .container:hover .middle {
        opacity: 1;
      }

      .text {
        background: #665A48;
        color: white;
        font-size: 16px;
        padding: 16px 32px;
      }

      
`;

export const ProgressBarStyles = styled.div`
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 15px;
    background: #C6D57E;
    transform-origin: 0%;
    z-index: 100;
  }

  .search {
    padding: 1.5rem 0 1.5rem 0;
    
  }
  .search2 {
    padding: 0.5rem 15% 0.5rem 0.2rem;
    font-size: 1.1rem

    
  }


`;