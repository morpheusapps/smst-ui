import styled from 'styled-components';
import { GoogleAuthButton } from 'smst-design-system';

export const SignInFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #809ea6;
  width: 400px;
  height: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
  background-color: white;
`;

export const SignInHeader = styled.div`
  font-size: 30px;
  text-align: center;
  color: #59767d;
`;

export const StyledGoogleAuthButton = styled(GoogleAuthButton)`
  margin: 0 auto 90px;
`;

export const SignInErorLayout = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  color: red;
  font-weight: bold;
`;
