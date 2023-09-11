import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  margin: 115px 0;

  .portfolio-header {
    padding-right: 10%;

    h2 {
      line-height: 1;
      font-weight: 500;
      font-size: 96px;
    }

    p {
      width: 560px;
      margin-top: 45px;
      font-size: 24px !important;
      line-height: 1.4;
      font-weight: 300;
      opacity: 0.6;
      color: black;
    }
  }

  .portfolio-section {
    margin-top: 80px;

    .portfolios {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;

      .portfolio {
        img {
          width: 100%;
          height: 345px;
        }

        h5 {
          line-height: 1.2;
          font-weight: 400;
          font-size: 17px;
          margin-top: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 959px) {
    margin: 100px 0;
    .portfolio-header {
      padding-right: 0;
      justify-content: flex-start;
      align-items: flex-start;

      h2 {
        line-height: 1;
        font-size: 90px;
      }

      p {
        width: 560px;
        margin-top: 45px;
        font-size: 24px;
        line-height: 1.4;
        font-weight: 300;
        opacity: 0.6;
        color: black;
      }
    }

    .portfolio-section {
      margin-top: 75px;

      .portfolios {
        grid-template-columns: 1fr;
        grid-gap: 50px;

        .portfolio {
          width: 100%;
          display: flex;
          align-items: flex-start;
          grid-gap: 20px;
          img {
            width: 50%;
            height: 260px;
          }

          h5 {
            line-height: 1.4;
            font-weight: 400;
            font-size: 18px;
            margin-top: 0;
          }
        }
      }
    }
  }
  
  @media only screen and (max-width: 650px) {
    margin: 100px 0;
    .portfolio-header {
      padding-right: 0;
      justify-content: flex-start;
      align-items: flex-start;

      h2 {
        line-height: 1;
        font-size: 50px;
      }

      p {
        width: auto;
        margin-top: 40px;
        font-size: 18px;
        line-height: 1.4;
        font-weight: 300;
        opacity: 0.6;
        color: black;
      }
    }

    .portfolio-section {
      margin-top: 50px;

      .portfolios {
        .portfolio {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          grid-gap: 20px;
          img {
            width: 100%;
            height: 290px;
          }

          h5 {
            line-height: 1.4;
            font-weight: 400;
            font-size: 18px;
            margin-top: 0;
          }
        }
      }
    }
  }
`
