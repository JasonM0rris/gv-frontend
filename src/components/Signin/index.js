import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  Text,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  ImageWrapper,
  SkipSection,
  NavLink,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            {" "}
            <img src="/images/logos/logo.svg" alt="logo" />
          </Icon>
          <FormContent>
            <Form action="#">
              <ImageWrapper
                src="/images/elements/sign-in.svg"
                alt="enter code"
              />
              <FormH1>Sign in</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton to="/dashboard" type="submit">
                Continue
              </FormButton>
              <Text>Forgot password</Text>
              <SkipSection>
                <Text>Temporary jump for naviagtion -</Text>
                <NavLink to="/dashboard">Skip</NavLink>
              </SkipSection>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
