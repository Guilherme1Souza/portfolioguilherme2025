import styled from "styled-components";
import { breakpoints } from '../../styles/break';

export const Navegação = styled.nav`
  position: relative;

  .nav {
    display: flex;
    align-items: center;
    height: 100px;

    .nav-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 68px;
      margin-left: auto;
      list-style: none;

      @media (min-width: ${breakpoints.xg}) {
        margin-left: 1050px;
        padding-right: 20px;
      }

      @media (max-width: ${breakpoints.xg}) {
        margin-left: 950px;
        padding-right: 20px;
      }

      @media (max-width: ${breakpoints.gg}) {
        margin-left: 450px;
        padding-right: 20px;
      }

      @media (max-width: ${breakpoints.g}) {
       margin-left: 350px;
      }

      @media (max-width: ${breakpoints.m}) {
        flex-direction: column;
        margin: 0 auto;
        gap: 60px;
        background: none;
      }

      @media (max-width: ${breakpoints.p}) {
        margin: 0 auto;
        gap: 50px;
        background: none;
      }

      li a {
        color: ${({ theme }) => theme.COLORS.TEXT};
        text-decoration: none;
        text-transform: uppercase;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        position: relative;
        padding-block: 16px;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: ${({ theme }) => theme.COLORS.BLUE};
          transition: width 0.3s ease-in-out;
        }

        &:hover::before {
          width: 100%;
        }

        &:hover {
          color: ${({ theme }) => theme.COLORS.BLUE};
        }
      }
    }

    @media (max-width: ${breakpoints.m}) {
      li a {
          font-size: 20px;
        }
     }

    @media (max-width: ${breakpoints.p}) {
      li a {
          font-size: 16px;
        }
     }
  }

  .hamburger-menu {
    display: none;
    font-size: 3.5rem;
    cursor: pointer;
    z-index: 1000;

    svg {
      margin: 40px;
    }

    @media (max-width: ${breakpoints.m}) {
      display: block;
    }

    
  }

  .header {
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.m}) {
      position: fixed;
      top: 100px;
      left: -100%;
      width: 50%;
      height: 55%;
      background-color: ${({ theme }) => theme.COLORS.GRAY};
      transition: left 0.3s ease-in-out;
      flex-direction: column;
      border-radius: 0 50px 50px 0;
      z-index: 999;

      &.open {
        left: 0;
      }
    }

    @media (max-width: ${breakpoints.p}) {
      width: 50%;
      height: 60%;
    }
  }
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;
