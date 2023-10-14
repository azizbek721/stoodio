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
        bottom: ${(props) => (props.currentPath === '/team' ? "50px" : "100px")};
        height: ${(props) => (props.currentPath === '/team' ? "auto" : "188px")};

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
        bottom: ${(props) => (props.currentPath === '/team' ? "50px" : "60px")};
        height: ${(props) => (props.currentPath === '/team' ? "auto" : "188px")};

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
        bottom: ${(props) => (props.currentPath === '/team' ? "50px" : "60px")};
        height: ${(props) => (props.currentPath === '/team' ? "auto" : "188px")};

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
        height: ${(props) => (props.currentPath === '/team' ? "auto" : "188px")};

        .discuss-text {
          width: 100%;
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
        height: ${(props) => (props.currentPath === '/team' ? "200px" : "188px")};

        .discuss-text {
          width: ${(props) => (props.currentPath === '/team' ? "250px" : "")};
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
        height: ${(props) => (props.currentPath === '/team' ? "160px" : "188px")};

        .discuss-text {
          width: ${(props) => (props.currentPath === '/team' ? "250px" : "")};
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
export const Modal = styled.div`
  display: ${(props) => (props.discuss ? 'block' : 'none')};
  top: 50px;
  bottom: 50px;
  left: 30%;
  right: 30%;
  height: ${(props) => (props.discuss.toString() === 'true' ? "671px" : "0")};
  width: 600px;
  background-color: #ffffff;
  color: black;
  position: fixed;
  z-index: 998;
  padding: 15px 0;
  -webkit-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  .modal-container {
    width: auto;
    margin: 15px 30px;
  }

  .modal-top {
    position: relative;

    .modal-top-texts {
      h4 {
        letter-spacing: .6px;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 9px;
      }

      p {
        font-size: 15px;
        opacity: .8;
        margin-bottom: 15px;
      }
    }

    .modal-close-btn {
      width: 28px;
      height: 28px;
      position: absolute;
      right: -8px;
      border-radius: 50%;
      background: #0047bb;
      color: white;
      font-weight: 200;
      opacity: .5;

      &:hover {

      }
    }
  }

  .modal-form {
    input, select, textarea {
      padding: 17px 35px 15px 10px;
      border: 1px solid rgb(0 0 0 / 9%);
      border-radius: 4px;
      height: 52px;
      background-color: rgb(232 232 232);
      color: #000;
      letter-spacing: -0.3px;
      font-size: 16px;
      outline-color: #2447BB;
      outline-width: 0.5px;
      transition: 0.2s ease-in;
      
      &::-webkit-input-placeholder {
        transition: 0.2s ease-in;
      }

      &:focus {
        background: #ffffff;
        height: 50px;
        padding-bottom: 0;
        transition: 0.2s ease-in;
        
        &::-webkit-input-placeholder {
          font-size: .75em;
          position: relative;
          top: -15px;
          transition: 0.2s ease-out;
        }
        
        
      }
    }


    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
    
    select option {
      color: #9CA3AF;
    }

    textarea {
      min-height: 137px;
    }

    .modal-send-btn {
      height: 52px;
      padding: 15px 20px;
      margin: 0;
      min-height: 52px;
      width: 100%;
      border: 0;
      border-radius: 4px;
      background-color: rgb(0 71 187);
      box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
      outline: 0;
      text-align: center;
      color: white;
      font-size: 16px;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 960px) {
    display: ${(props) => (props.discuss ? 'block' : 'none')};
    top: 15px;
    bottom: 50px;
    left: 15%;
    right: 30%;
    height: ${(props) => (props.discuss.toString() === 'true' ? "671px" : "0")};
    width: 600px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }
  }
  
  @media only screen and (max-width: 800px) {
    display: ${(props) => (props.discuss ? 'block' : 'none')};
    top: 15px;
    bottom: 50px;
    left: 10%;
    right: 30%;
    height: ${(props) => (props.discuss.toString() === 'true' ? "671px" : "0")};
    width: 600px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 690px) {
    display: ${(props) => (props.discuss ? 'block' : 'none')};
    top: 15px;
    bottom: 50px;
    left: 7%;
    right: 30%;
    height: ${(props) => (props.discuss.toString() === 'true' ? "671px" : "0")};
    width: 600px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 650px) {
    display: ${(props) => (props.discuss ? 'block' : 'none')};
    top: 15px;
    bottom: 50px;
    left: 2%;
    right: 30%;
    height: ${(props) => (props.discuss.toString() === 'true' ? "671px" : "0")};
    width: 600px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.discuss ? 'block' : 'none')};
    top: 15px;
    bottom: 50px;
    left: 0;
    right: 30%;
    height: ${(props) => (props.discuss.toString() === 'true' ? "671px" : "0")};
    width: 100%;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 500px) {
    display: ${(props) => (props.discuss ? 'block' : 'none')};
    top: 25px;
    bottom: 25px;
    left: 0;
    right: 30%;
    height: ${(props) => (props.discuss.toString() === 'true' ? "auto" : "0")};
    width: 100%;
    overflow-y: auto;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 18px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 18px;
          line-height: 18px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 400px) {
    display: ${(props) => (props.discuss ? 'block' : 'none')};
    top: 30px;
    bottom: 30px;
    left: 0;
    right: 30%;
    height: ${(props) => (props.discuss.toString() === 'true' ? "auto" : "0")};
    width: 100%;
    overflow-y: auto;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 18px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 18px;
          line-height: 18px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
`


export const Resume = styled.div`
  display: ${(props) => (props.resume ? 'block' : 'none')};
  top: 50px;
  bottom: 50px;
  left: 30%;
  right: 30%;
  height: ${(props) => (props.resume?.toString() === 'true' ? "max-content" : "0")};
  width: 600px;
  background-color: #ffffff;
  overflow-y: auto;
  color: black;
  position: fixed;
  z-index: 998;
  padding: 15px 0;
  -webkit-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  .modal-container {
    width: auto;
    margin: 15px 30px;
  }

  .modal-top {
    position: relative;

    .modal-top-texts {
      h4 {
        letter-spacing: .6px;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 9px;
      }

      p {
        font-size: 15px;
        opacity: .8;
        margin-bottom: 15px;
      }
    }

    .modal-close-btn {
      width: 28px;
      height: 28px;
      position: absolute;
      right: -8px;
      border-radius: 50%;
      background: #0047bb;
      color: white;
      font-weight: 200;
      opacity: .5;

      &:hover {

      }
    }
  }

  .modal-form {
    input, select, textarea {
      padding: 17px 35px 15px 10px;
      border: 1px solid rgb(0 0 0 / 9%);
      border-radius: 4px;
      height: 52px;
      background-color: rgb(232 232 232);
      color: #000;
      letter-spacing: -0.3px;
      font-size: 16px;
      outline-color: #2447BB;
      outline-width: 0.5px;
      transition: 0.2s ease-in;
      
      &::-webkit-input-placeholder {
        transition: 0.2s ease-in;
      }

      &:focus {
        background: #ffffff;
        height: 50px;
        padding-bottom: 0;
        transition: 0.2s ease-in;
        
        &::-webkit-input-placeholder {
          font-size: .75em;
          position: relative;
          top: -15px;
          transition: 0.2s ease-out;
        }
        
        
      }
    }


    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
    
    select option {
      color: #9CA3AF;
    }

    textarea {
      min-height: 137px;
    }

    .modal-send-btn {
      height: 52px;
      padding: 15px 20px;
      margin: 0;
      min-height: 52px;
      width: 100%;
      border: 0;
      border-radius: 4px;
      background-color: rgb(0 71 187);
      box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
      outline: 0;
      text-align: center;
      color: white;
      font-size: 16px;
      font-weight: 600;
    }
  }
  
  @media only screen and (max-width: 1024px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 20px;
    bottom: 20px;
    left: 10%;
    right: 30%;
    height: ${(props) => (props.resume?.toString() === 'true' ? "min-content" : "0")};
    width: 80%;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 10px 0;
  }
  
  @media only screen and (max-width: 960px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 20%;
    bottom: 50px;
    left: 15%;
    right: 30%;
    height: ${(props) => (props.resume?.toString() === 'true' ? "max-content" : "0")};
    width: 90%;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }
  }
  
  @media only screen and (max-width: 800px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 15%;
    bottom: 50px;
    left: 5%;
    right: 30%;
    height: ${(props) => (props.resume?.toString() === 'true' ? "max-content" : "0")};
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 690px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 15px;
    bottom: 50px;
    left: 7%;
    right: 30%;
    height: ${(props) => (props.resume?.toString() === 'true' ? "max-content" : "0")};
    width: 600px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 650px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 15px;
    bottom: 50px;
    left: 2%;
    right: 30%;
    height: ${(props) => (props.resume?.toString() === 'true' ? "max-content" : "0")};
    width: 600px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 10%;
    bottom: 50px;
    left: 0;
    right: 30%;
    height: ${(props) => (props.resume?.toString() === 'true' ? "max-content" : "0")};
    width: 100%;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 30px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }
        }
      }

      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media (min-height: 900px) and (max-width: 500px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 10%;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${(props) => (props.resume?.toString() === 'true' ? "min-content" : "0")};
    width: 100%;
    overflow-y: scroll;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 10px 0;

    .modal-container {
      width: auto;
      margin: 15px 18px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 18px;
          line-height: 18px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
  
  @media only screen and (max-width: 400px) {
    display: ${(props) => (props.resume ? 'block' : 'none')};
    top: 50px;
    bottom: 30px;
    left: 0;
    right: 30%;
    height: ${(props) => (props.resume.toString() === 'true' ? "max-content" : "0")};
    width: 100%;
    overflow-y: scroll;
    background-color: #ffffff;
    color: black;
    position: fixed;
    z-index: 998;
    padding: 15px 0;

    .modal-container {
      width: auto;
      margin: 15px 18px;
    }

    .modal-top {
      position: relative;

      .modal-top-texts {
        h4 {
          letter-spacing: .6px;
          font-size: 18px;
          line-height: 18px;
          font-weight: 500;
          margin-bottom: 9px;
        }

        p {
          font-size: 15px;
          opacity: .8;
          margin-bottom: 15px;
        }
      }

      .modal-close-btn {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -8px;
        border-radius: 50%;
        background: #0047bb;
        color: white;
        font-weight: 200;
        opacity: .5;

        &:hover {

        }
      }
    }

    .modal-form {
      input, select, textarea {
        padding: 17px 35px 15px 10px;
        border: 1px solid rgb(0 0 0 / 9%);
        border-radius: 4px;
        height: 52px;
        background-color: rgb(232 232 232);
        color: #000;
        letter-spacing: -0.3px;
        font-size: 16px;
        outline-color: #2447BB;
        outline-width: 0.5px;
        transition: 0.2s ease-in;

        &::-webkit-input-placeholder {
          transition: 0.2s ease-in;
        }

        &:focus {
          background: #ffffff;
          height: 50px;
          padding-bottom: 0;
          transition: 0.2s ease-in;

          &::-webkit-input-placeholder {
            font-size: .75em;
            position: relative;
            top: -15px;
            transition: 0.2s ease-out;
          }


        }
      }


      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }

      select option {
        color: #9CA3AF;
      }

      textarea {
        min-height: 137px;
      }

      .modal-send-btn {
        height: 52px;
        padding: 15px 20px;
        margin: 0;
        min-height: 52px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: rgb(0 71 187);
        box-shadow: -1px -1px 1px rgba(0, 0, 0, .09);
        outline: 0;
        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
      }
    }  
  }
`
