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
        color: black!important;
    }
    .hidden {
        display: none;
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
            .hamburger-btn {
                top: 30px;
                right: 30px;
                width: 48px;
                height: 48px;
                padding: 10px;
            }
        }
    }
  
    @media only screen and (max-width: 900px) {
        padding-top: 20px;
        .navbar {
            .hamburger-btn {
                top: 20px;
                right: 20px;
                width: 48px;
                height: 48px;
                padding: 10px;
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
