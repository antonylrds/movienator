import styled from 'styled-components';

export const Carousel = styled.div`
  background: url('https://image.tmdb.org/t/p/original/4YbHir4Ka4kG7WOdh0anXv1iT8s.jpg');
  /* The image used */

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: 0px -50px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
    
`;

export const Content = styled.div`
  margin-top: 30px;
  max-width: 1500px;
  width: 100%;
  h1 {
      align-self: flex-start;
      color: #FFF;
      font-weight: bold;
      z-index: 2;
      border-bottom: 2px solid #FFF;
      width: 100%;
      padding-bottom: 10px;
    }
`;

export const MovieList = styled.div`
  margin-top: 30px;
  overflow-x: hidden;
`;
