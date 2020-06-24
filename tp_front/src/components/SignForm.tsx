import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faSearch } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled.form`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FormTitle = styled.h1`
  color: white;
  opacity: 0.8;
  font-family: Squada One;
  font-size: 2.5rem;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 70%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

const InputName = styled.span`
  position: absolute;
  top: 45%;
  right: 2%;
  color: white;
  opacity: 0.5;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 25px;
  font-size: 1.3rem;
  text-align: center;
  opacity: 0.8;
`;

const RememberContainer = styled.div`
  position: relative;
  width: 72%;
  margin-top: 25px;
`;

const RememberInput = styled.input`
  position: relative;
  bottom: 2px;
`;

const RememberLabel = styled.label`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  margin-left: 2px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 70%;
  height: 50px;
  margin-top: 35px;
  background-color: #9323f6;
  opacity: 0.8;
  border-radius: 30px;
  font-size: 1.1rem;
  font-family: 'Do Hyeon';
  color: rgba(255, 255, 255, 0.9);
  transition: opacity 0.1s linear;
  &:hover {
    opacity: 0.6;
  }
`;

const SignUpButton = styled.button`
  margin-top: 20px;
  font-size: 1.1rem;
  color: white;
  opacity: 0.5;
  font-family: 'Do Hyeon';
  transition: opacity 0.1s linear;
  &:hover {
    opacity: 0.8;
  }
`;

const EmailCheck = styled.button`
  position: absolute;
  font-size: 1.3rem;
  top: 45%;
  right: 0%;
  color: white;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.1s linear;
  &:hover {
    opacity: 0.9;
  }
`;

const SignForm = () => {
  return true ? (
    <FormContainer>
      <FormTitle>Sign In</FormTitle>
      <InputContainer>
        <Input placeholder="Email" type="email" required />
        <InputName>
          <FontAwesomeIcon icon={faUser} size="1x" />
        </InputName>
      </InputContainer>
      <InputContainer>
        <Input placeholder="Password" type="password" required />
        <InputName>
          <FontAwesomeIcon icon={faKey} size="1x" />
        </InputName>
      </InputContainer>
      <RememberContainer>
        <RememberInput type="checkbox" id="remember_input" />
        <RememberLabel htmlFor="remember_input">Remember me</RememberLabel>
      </RememberContainer>
      <SubmitButton>Sign In</SubmitButton>
      <SignUpButton>Sign Up</SignUpButton>
    </FormContainer>
  ) : (
    <FormContainer>
      <FormTitle>Sign Up</FormTitle>
      <InputContainer>
        <Input placeholder="Nickname" required />
        <InputName>
          <FontAwesomeIcon icon={faUser} size="1x" />
        </InputName>
      </InputContainer>
      <InputContainer>
        <Input placeholder="Email" type="email" required />
        <EmailCheck>
          <FontAwesomeIcon icon={faSearch} size="1x" />
        </EmailCheck>
      </InputContainer>
      <InputContainer>
        <Input placeholder="Password" type="password" required />
        <InputName>
          <FontAwesomeIcon icon={faKey} size="1x" />
        </InputName>
      </InputContainer>
      <InputContainer>
        <Input placeholder="Password Check" type="password" required />
        <InputName>
          <FontAwesomeIcon icon={faKey} size="1x" />
        </InputName>
      </InputContainer>
      <SubmitButton>Sign Up</SubmitButton>
    </FormContainer>
  );
};

export default SignForm;
