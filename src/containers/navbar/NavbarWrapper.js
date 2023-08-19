import styled from "styled-components";

export const NavbarWrapper = styled.div`
    padding-top: 40px;
    position: relative;
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
        position: absolute;
        top: 100px;
        right: 100px;
        background-color: #000;
        color: white;
        padding: 12px;
        border-radius: 12px;
    }
`
