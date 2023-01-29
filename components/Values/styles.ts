import styled from "styled-components";

export const Section = styled.section`
  .pic-md {
    left: 0;
    right: 0;
    height: 39rem;
    @media screen and (max-width: 1024px) {
      height: 30rem;
    }
    margin: 0 auto;
    top: -2px;
    @media screen and (max-width: 768px) {
      height: 28rem;
      top: -2rem;
      flex-grow: 1;
    }
  }
`;
export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;


  @media screen and (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    .values-text {
      width: 100%;
    }
  }
`;
