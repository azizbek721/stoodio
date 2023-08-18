import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #000;
  height: 100%;
  padding: 100px 0 45px 0;

  .footer-over {
    .footer-left {
      width: 360px;

      .footer-logo {
        width: 260px;
        height: 88px;
      }

      .footer-contact {
        margin: 80px 0 25px 0;
        height: 99px;

        img {
          width: 99px;
        }

        .footer-contacts {

          p {
            color: #838383;
            font-size: 14px;
            padding: 0 !important;
            line-height: 18px;
          }

          a {
            color: white;
            font-size: 14px;
            line-height: 18px;
          }
        }
      }

      .footer-left-text {
        font-size: 12px;
        color: #838383;
      }
    }
    
    .footer-center {
      a {
        font-size: 24px;
        color: white;
        line-height: 35px;
      }
    }
    
    .footer-right {
      width: 242px;
      a {
        font-size: 14px;
        color: white;
        line-height: 18px;
      }
      span {
        font-size: 14px;
        color: #838383;
        font-weight: 300;
        opacity: 0.7;
        line-height: 18px;
      }
      p {
        font-size: 14px;
        color: #838383;
        font-weight: 300;
        line-height: 18px;
      }
    }
  }
`
