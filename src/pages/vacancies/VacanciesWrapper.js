import styled from "styled-components";


export const VacanciesWrapper = styled.div`
  .jobs-title-div {
    padding: 100px 10% 80px 0;

    h2 {
      font-size: 96px;
      line-height: 1;
      font-weight: 500;
    }
  }

  .jobs {
    .job {
      border-top: 1px solid black;
      height: 140px;
      &:last-of-type, &:last-of-type:hover {
        border-bottom: 1px solid black;
      }

      .job-inner {
        height: 100%;
        padding: 20px 0;

        .job-info {
          h5 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            font-weight: 500;
          }

          p {
            color: #838383;
            font-size: 17px;
            line-height: 24px;
            font-weight: 400;
          }
        }

        .salary {
          p {
            color: #838383;
            font-size: 17px;
            line-height: 24px;
            font-weight: 400;
          }

          img {
            transition: transform 0.3s ease-in-out;
          }
        }
      }

      &:hover {
        background: #F0F0F0;
        border: 0;

        .salary img {
          transform: translateX(15px);
        }
      }
    }
  }

  .hr-over {
    .hr-div {
      margin: 115px 0;
      width: 475px;
      margin-right: 15%;

      h5 {
        color: #000000;
        font-size: 24px;
        line-height: 38px;
        font-weight: 500;

        a {
          color: #0047bb;
        }
      }

      .not-found-us {
        margin-top: 80px;
        margin-bottom: 60px;

        h3, .write-us h3 {
          font-size: 40px;
          line-height: 48px;
          font-weight: 500;
        }

        .write-us {
          margin-top: 10px;
          margin-left: -18%;
          cursor: pointer;

          h3 {
            color: #0047bb;

          }

          &:hover {
            img {
              transform: translateX(15px);
            }
          }

          img {
            width: 48px;
            height: 28px;
            transition: transform 0.3s ease-in-out;
          }

        }
      }

      .hr-contact {
        width: 310px;

        p {
          color: #000000;
          font-size: 17px;
          line-height: 24px;
          font-weight: 400;
          opacity: 0.6;
        }

        a {
          width: 100%;
          margin-top: 10px;
          font-size: 36px;
          line-height: 42px;
          font-weight: 500;
        }
      }
    }
  }
  
  @media only screen and (max-width: 960px) {
    .jobs-title-div {
      padding: 100px 0 70px 0;
      justify-content: start;
      align-items: start;

      h2 {
        font-size: 90px;
        line-height: 1;
        font-weight: 500;
      }
    }

    .jobs {
      .job {
        height: auto;

        .job-inner {
          height: 100%;
          padding: 40px 0;

          .job-info {
            h5 {
              color: #000000;
              font-size: 24px;
              line-height: 31px;
              font-weight: 500;
            }

            p {
              color: #838383;
              font-size: 17px;
              line-height: 24px;
              font-weight: 400;
            }
          }

          .salary {
            p {
              color: #838383;
              font-size: 17px;
              line-height: 24px;
              font-weight: 400;
            }

            img {
              transition: transform 0.3s ease-in-out;
            }
          }
        }

        &:hover {
          background: #F0F0F0;
          border: 0;

          .salary img {
            transform: translateX(15px);
          }
        }
      }
    }

    .hr-over {
      .hr-div {
        margin: 120px 0;
        width: 475px;
        margin-right: 0;

        h5 {
          font-size: 26px;
          line-height: 42px;
          font-weight: 500;
        }

        .not-found-us {
          margin-bottom: 50px;

          h3, .write-us h3 {
            font-size: 40px;
            line-height: 48px;
          }

          .write-us {
            margin-top: 10px;
            margin-left: 0;
            cursor: pointer;

            h3 {
              color: #0047bb;

            }

            &:hover {
              img {
                transform: translateX(15px);
              }
            }

            img {
              width: 48px;
              height: 28px;
              transition: transform 0.3s ease-in-out;
            }

          }
        }

        .hr-contact {
          width: 310px;

          p {
            font-size: 18px;
            line-height: 26px;
          }

          a {
            width: 100%;
            margin-top: 10px;
            font-weight: 500;
          }
        }
      }
    }
  }
  
  @media only screen and (max-width: 600px) {
    .jobs-title-div {
      padding: 100px 0 50px 0;
      justify-content: start;
      align-items: start;

      h2 {
        font-size: 48px;
        line-height: 1;
        font-weight: 500;
      }
    }

    .jobs {
      .job {
        height: auto;

        .job-inner {
          height: 100%;
          padding: 20px 0;

          .job-info {
            h5 {
              font-size: 18px;
              line-height: 26px;
            }

            p {
              font-size: 14px;
              line-height: 18px;
            }
          }

          .salary {
            grid-column-gap: 25px;
            p {
              font-size: 14px;
              line-height: 18px;
            }

            img {
              width: 32px;
              height: 20px;
              transition: transform 0.3s ease-in-out;
            }
          }
        }
      }
    }

    .hr-over {
      .hr-div {
        margin: 62px 0;
        width: 100%;

        h5 {
          font-size: 18px;
          line-height: 26px;
        }

        .not-found-us {
          margin: 40px 0;

          h3, .write-us h3 {
            font-size: 26px;
            line-height: 31px;
          }

          .write-us {
            margin-top: 10px;
            margin-left: 0;
            //grid-column-gap: 20px;
            img {
              width: 32px;
              height: 20px;
              margin-left: -10px;
            }
          }
        }

        .hr-contact {
          width: 310px;

          p {
            font-size: 14px;
            line-height: 22px;
          }

          a {
            width: 100%;
            margin-top: 10px;
            font-size: 24px;
            line-height: 32px;
            font-weight: 500;
          }
        }
      }
    }
  }
  
  @media only screen and (max-width: 480px) {
    .jobs-title-div {
      padding: 100px 0 45px 0;
      h2 {
        font-size: 48px;
        line-height: 1;
        font-weight: 500;
      }
    }

    .jobs {
      .job {
        height: auto;

        .job-inner {
          height: 100%;
          padding: 25px 0;

          .job-info {
            width: 250px;
            h5 {
              font-size: 18px;
              line-height: 26px;
            }

            p {
              font-size: 14px;
              line-height: 18px;
            }
          }

          .salary {
            grid-column-gap: 25px;
            p {
              font-size: 14px;
              line-height: 18px;
            }

            img {
              width: 32px;
              height: 20px;
              transition: transform 0.3s ease-in-out;
            }
          }
        }
      }
    }

    .hr-over {
      .hr-div {
        margin: 75px 0;
        width: 100%;

        h5 {
          font-size: 18px;
          line-height: 26px;
        }

        .not-found-us {
          margin: 45px 0;

          h3, .write-us h3 {
            font-size: 24px;
            line-height: 31px;
          }

          .write-us {
            margin-top: 10px;
            margin-left: 0;
            img {
              width: 32px;
              height: 20px;
              margin-left: -10px;
            }
          }
        }

        .hr-contact {
          width: 100%;

          p {
            font-size: 13px;
            line-height: 18px;
          }

          a {
            width: auto;
            margin-top: 10px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 500;
          }
        }
      }
    }
  }
`
