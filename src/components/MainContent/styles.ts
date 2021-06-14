import styled from "styled-components";

export const Container = styled.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  height: auto;
  background: #363636;
  box-shadow: 2px 5px 32px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  text-align: center;
  padding: 54px;
  z-index: 999999;
  /* Deus me perdoe pelos crimes cometidos acima */
  position: relative;

  @media only screen and (max-width: 768px){
	  width: 80vw;

	  h1 {
		font-size: 3rem;
		line-height: 3srem;
	  }

	  h4 {
		  font-size: 1.2rem;
		  line-height: 1.2rem;
	  }

  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: transparent;
  width: 100%;
  height: fit-content;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 500;
  color: transparent;
  margin-bottom: 12px;
  position: relative;
  -webkit-text-stroke: 2px #fff;
`;

export const Shadow = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 12px;
  position: absolute;

  animation: wave 4s ease-in-out infinite;

  @keyframes wave {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        15% 44%,
        32% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;

export const Subtitle = styled.h4`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: #fff;
`;

export const ThemeSwitch = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  border-radius: 50%;
  background: #ececec;

  display: flex;
  align-items: center;
  justify-content: center;
`;
