import styled from "styled-components";

export const MenuView = styled.header`
  .mobile-menu {
    left: -200%;
    transition: 0.5s;
  }

  .mobile-menu.active {
    left: 0;
  }

  .mobile-menu ul li ul {
    display: none;
  }
  .link {
    transition: all ease 0.3s;
    font-family: "Nunito",sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
  }
  .link:hover {
    background-color: white;

    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    background-image: linear-gradient(
      220.94deg,
      #96c953 14.43%,
      #96c953 14.44%,
      #499a3b 85.28%
    );
  }
`;
