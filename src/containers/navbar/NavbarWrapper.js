import styled from "styled-components";

export const NavbarWrapper = styled.div`
  padding-top: 40px;

  .navbar {
    .nav-logo {
      img {
        width: 174px;
        height: 60px;
      }
    }

    .nav-center {
      a {
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        word-break: normal;
      }
    }

    .nav-tel {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      word-break: normal;
    }
  }

  .hamburger-btn {
    position: fixed;
    top: 50px;
    right: 50px;
    width: 58px;
    height: 58px;
    background-color: #EBEBEB;
    opacity: 0.90;
    z-index: 9;
    padding: 16px;
    border-radius: 50%;
    display: block;
    text-align: center;
  }

  .fixed-discuss-btn {
    position: fixed;
    bottom: 50px;
    left: 50px;
    width: auto;
    height: 60px;
    z-index: 9;
    background-color: #0047BB;
    color: white !important;
    padding: 0 35px;
    font-size: 24px;
    line-height: 56px;
    font-weight: 300;
    -webkit-border-radius: 2px;
    display: block;
    text-align: center;
  }

  .fixed-discuss-btn:hover {
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .burger-path {
    color: black !important;
  }

  .hidden {
    display: none;
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }

  .float-button {
    display: block;
    width: 60px !important;
    height: 60px !important;
    border-radius: 50%;
    background: #2447BB;
    position: fixed;
    bottom: 50px !important;
    right: 50px !important;
    z-index: 1;
    padding: 6px;
    box-shadow: -11px -7px 16px -4px rgba(34, 60, 80, 0.2);
  }

  .opened-float-button {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50%;
    border: none;
    background: #ffffff;
    color: black;
    position: fixed;
    bottom: 50px !important;
    right: 50px !important;
    z-index: 1;
    padding: 20px !important;
    text-align: center;
    box-shadow: -11px -7px 16px -4px rgba(34, 60, 80, 0.2);
  }

  .floating-menu {
    animation: slideIn 0.3s ease-out forwards; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px !important;
    border-radius: 5px;
    z-index: 1;
    position: fixed;
    right: 50px !important;
    bottom: 120px !important;

    .floating-menu.slide-out {
      animation: slideOut 0.3s ease-out forwards; 
      z-index: -1;
    }

    a {
      width: 50px !important;
      height: 50px !important;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      margin-bottom: 8px;
      box-shadow: -11px -7px 16px -4px rgba(34, 60, 80, 0.2);

      .iconify {
        width: 50px !important;
        height: 50px !important;
      }
    }

    .phone {
      background: #124E73;
      padding: 9px;

      .iconify {
        width: 32px !important;
        height: 32px !important;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding-top: 20px;
    .navbar {
      .nav-logo {
        img {
          width: 130px;
          height: 44.15px;
        }
      }
    }

    .hamburger-btn {
      top: 20px;
      right: 20px;
      width: 48px;
      height: 48px;
      padding: 10px;
    }

    .fixed-discuss-btn {
      bottom: 20px;
      left: 20px;
      width: 200px;
      height: 48px;
      font-size: 16px;
      line-height: 1.5;
      padding: 0 20px;
    }

    .float-button {
      width: 48px !important;
      height: 48px !important;
      bottom: 20px !important;
      right: 20px !important;
      padding: 6px !important;
    }

    .opened-float-button {
      width: 48px !important;
      height: 48px !important;
      bottom: 20px !important;
      right: 20px !important;
      padding: 20px !important;
    }

    .floating-menu {
      animation: slideIn 0.3s ease-out forwards;
      padding: 0 !important;
      border-radius: 5px;
      right: 20px !important;
      bottom: 80px !important;
      row-gap: 5px !important;
      outline: none;

      .floating-menu.slide-out {
        animation: slideOut 0.3s ease-out forwards;
        z-index: 999;
      }

      a {
        width: 50px !important;
        height: 50px !important;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        margin-bottom: 8px;
        box-shadow: -11px -7px 16px -4px rgba(34, 60, 80, 0.2);

        .iconify {
          width: 48px !important;
          height: 48px !important;
        }
      }

      .phone {
        background: #124E73;
        padding: 9px;

        .iconify {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding-top: 20px;

    .hamburger-btn {
      top: 20px;
      right: 20px;
      width: 48px;
      height: 48px;
      padding: 10px;
    }

    .fixed-discuss-btn {
      bottom: 20px;
      left: 20px;
      width: auto;
      height: 48px;
      font-size: 16px;
      line-height: 1.5;
      padding: 0 15px;
    }
  }

  .float-button {
    width: 48px;
    height: 48px;
    bottom: 20px;
    right: 20px;
    padding: 6px;
  }

  .opened-float-button {
    width: 48px;
    height: 48px;
    bottom: 20px;
    right: 20px;
    padding: 20px;
  }

  .floating-menu {
    animation: slideIn 0.3s ease-out forwards;
    padding: 0;
    border-radius: 5px;
    right: 20px;
    bottom: 80px;
    row-gap: 5px;
    outline: none;

    .floating-menu.slide-out {
      animation: slideOut 0.3s ease-out forwards; 
      z-index: -1;
    }

    a {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      margin-bottom: 8px;
      box-shadow: -11px -7px 16px -4px rgba(34, 60, 80, 0.2);
      
      .iconify {
        width: 48px;
        height: 48px;
      }
    }

    .phone {
      background: #124E73;
      padding: 9px;
      
      .iconify {
        width: 32px;
        height: 32px;
      }
    }
  }
`

export const MenuTop = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  overflow-x: scroll;
  width: ${(props) => (props.menu.toString() === 'true' ? "680px" : "0")};
  background-color: #000;
  position: fixed;
  transition: all 0.3s linear;
  z-index: 999;
  -webkit-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  .menu {
    margin: 50px 40px;

    .menu-top {
      img {
        width: 200px;
        height: 68px;
      }
    }

    .menu-links {
      margin-top: 65px;
      grid-row-gap: 15px;

      .menu-link {
        color: #ffffff;
        font-size: 64px;
        line-height: 82px;
        font-weight: 300;
      }

      .menu-link:hover {
        transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
        opacity: 0.50 !important;
      }

      .active-link {
        color: #ffffff;
        font-size: 64px;
        line-height: 82px;
        font-weight: 300;
        opacity: 0.50 !important;
      }
    }

    .menu-contacts {
      margin-top: 25px;

      p, a {
        font-size: 32px;
        color: #7C7C7C;
        line-height: 1.55;
        font-weight: 300;
      }

      a {
        color: white;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    width: ${(props) => (props.menu ? "320px" : "0")};
    .menu {
      height: 90%;
      margin: 30px;
      grid-row-gap: 0;

      .menu-top {
        position: relative;

        img {
          width: 180px;
          height: 60px;
        }

        .close-icon {
          position: absolute;
          top: -20px;
          right: 0;
          width: 32px;
          height: 30px;
        }
      }

      .menu-links {
        margin-top: 0;

        .menu-link {
          font-size: 24px;
          line-height: 36px;
        }

        .active-link {
          font-size: 24px;
          line-height: 36px;
        }
      }

      .menu-contacts {
        margin-top: 0;

        p, a {
          font-size: 13px;
        }
      }
    }
  }
`
