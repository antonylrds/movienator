import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin: 0px 20px;
  overflow-x: hidden;
    img {
      width: 200px;
      height: auto;
      margin-right: 20px
    }
    div {
      h1 {
        border-bottom: 0;
        font-size: 50px;
      }

      
      div {
        width: 100%;
      }
    }

    @media (max-width: 400px) {
      img {
      width: 100px;
      height: auto;
      margin-right: 20px
    }
    div {
      h1 {
        border-bottom: 0;
        font-size: 30px;
      }

      
      }
      div {
        width: 100%;
      }

      .MuiSvgIcon-root{
        font-size: 18px;
      }
    }

`;