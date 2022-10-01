import styled from "styled-components";

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;

const PrimaryButton = styled.button`
  padding: 8px 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const SecondaryButton = styled.button`
  padding: 8px 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const WarnButton = styled.button`
  padding: 8px 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.warn};
`;

const ErrorButton = styled.button`
  padding: 8px 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.error};
`;

function Home() {
  return (
    <div>
      <h1>Hello World</h1>

      <Wrapper>
        <PrimaryButton>
          Primary Button
        </PrimaryButton>

        <SecondaryButton>
          Secondary Button
        </SecondaryButton>

        <WarnButton>
          Warn Button
        </WarnButton>

        <ErrorButton>
          Error Button
        </ErrorButton>
      </Wrapper>
    </div>
  );
}

export default Home;