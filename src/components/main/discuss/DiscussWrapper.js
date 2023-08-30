import styled from "styled-components";

export const DiscussWrapper = styled.div`
  .discuss-container {
    position: relative;
    overflow: hidden;
    height: ${(props) => (props.currentPath === '/team' ? "480px" : "600px")};
    .background-discuss {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
      z-index: -1;
    }

    .discuss {
      position: absolute;
      bottom: ${(props) => (props.currentPath === '/team' ? "50px" : "100px")};
      height: ${(props) => (props.currentPath === '/team' ? "auto" : "222px")};

      .discuss-text {
        transform-origin: center center;
        width: 580px;
        line-height: 74px;
        color: #ffffff;
        font-size: 70px;
        font-weight: 400;
        letter-spacing: 1px;
        position: relative;

        .discuss-btn {
          position: absolute;
          bottom: 10px;
          margin-left: 20px;
          width: 205px;
          height: 48px;
          transform-origin: center center;
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          font-weight: 300;
          border-radius: 2px;
          background-color: #0047bb;
          text-align: center;
        }
        .discuss-btn:hover {
          background-color: #fff;
          color: black;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }
      }
      .discuss-btn {
        position: absolute;
        bottom: 10px;
        margin-left: 20px;
        width: 205px;
        height: 48px;
        transform-origin: center center;
        color: #ffffff;
        font-size: 18px;
        line-height: 1;
        font-weight: 300;
        border-radius: 2px;
        background-color: #0047bb;
        text-align: center;
      }
      .discuss-btn:hover {
        background-color: #fff;
        color: black;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      }
    }
  }


  @media only screen and (max-width: 1024px) {
    .discuss-container {
      height: 530px;

      .discuss {
        bottom: 100px;
        height: 188px;

        .discuss-text {
          line-height: 63px;
          font-size: 60px;
          position: relative;
          .discuss-btn {
            position: absolute;
            bottom: 5px;
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 960px) {
    .discuss-container {
      height: 370px;

      .discuss {
        justify-content: left;
        bottom: 60px;
        height: 188px;

        .discuss-text {
          line-height: 63px;
          font-size: 60px;
          position: relative;
          .discuss-btn {
            position: absolute;
            bottom: 5px;
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 750px) {
    .discuss-container {
      height: 370px;

      .discuss {
        justify-content: left;
        bottom: 60px;
        height: 188px;

        .discuss-text {
          line-height: 63px;
          font-size: 60px;
          position: relative;
          .discuss-btn {
            position: absolute;
            bottom: 5px;
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .discuss-container {
      height: 340px;

      .discuss {
        justify-content: left;
        bottom: 45px;
        height: 188px;

        .discuss-text {
          line-height: 56px;
          font-size: 48px;
          position: relative;
          .discuss-btn {
            position: absolute;
            bottom: 20px;
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .discuss-container {
      height: 340px;

      .discuss {
        justify-content: left;
        bottom: 0;
        height: 188px;

        .discuss-text {
          line-height: 33px;
          font-size: 30px;
          letter-spacing: 0;
          position: relative;
        }
        .discuss-btn {
          position: absolute;
          bottom: 50px;
          margin-left: 0;
          width: 205px;
          height: 48px;
          font-size: 18px;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .discuss-container {
      height: 340px;

      .discuss {
        justify-content: left;
        bottom: 30px;
        height: 188px;

        .discuss-text {
          line-height: 33px;
          font-size: 30px;
          letter-spacing: 0;
          position: relative;
        }
        .discuss-btn {
          position: absolute;
          bottom: 20px;
          margin-left: 0;
          width: 205px;
          height: 48px;
          font-size: 18px;
        }
      }
    }
  }

`
