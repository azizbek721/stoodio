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
          font-size: 24px;
          line-height: 38px;
          font-weight: 500;
        }
      }
    }
  }
`
