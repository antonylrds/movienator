import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin: 0px 20px;
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

      @media (max-width: 550px) {
        h1 {
        border-bottom: 0;
        font-size: 30px;
      }
      }
      div {
        width: 100%;
      }
    }
`;