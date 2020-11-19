import styled from "styled-components";

export const ButtonContainer = styled.button`
         text-transform: capitalize;
         font-size: 1.43rem;
         background: ${(props) =>
           props.cart ? "transparent" : "var(--simpleColor)"};
         border: 0.05rem solid var(--mainColor);
         border-color: ${(props) =>
           props.cart ? "var(--othercolors)" : "var(--mainColor)"};
         color: ${(props) =>
           props.cart ? "var(--simpleColor)" : "var(--textColor)"};
         border-radius: 0.5rem;
         padding: 0.2rem 0.5rem;
         cursor: pointer;
         margin: 0.2rem 0.5rem 0.2rem 0;
         transition: all 1s ease-in-out;
         &:hover {
           background: ${(props) =>
             props.cart ? "var(--color)" : "var(--textColor)"};

           color: ${(props) =>
             props.cart ? "var(--simpleColor)" : "var(--simpleColor)"};
         }
         &:focus {
           outline: none;
         }
       `;
