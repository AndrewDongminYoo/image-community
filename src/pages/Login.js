import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Input, Button } from "../elements";
import { useDispatch } from 'react-redux';
import { actionCreators as userActions }  from '../redux/modules/user'

const Container = styled.form`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 20px;
`;

const ErrorText = styled.p`
  align-items: flex-start;
  width: 100%;
  height: 10px;
  line-height: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  color: red;
`;

const Login = (Route) => {

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleLoginPress = () => {
    if (Email && password) {
      dispatch(userActions.loginFB(Email, password))
    } else {
      setErrorMessage("모두 입력해주세요.")
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Text size="32px" bold>로그인</Text>
        <Input
          label="이메일"
          value={Email}
          _onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요."
          returnKeyType="next"
        />
        <Input
          label="비밀번호"
          value={password}
          _onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요."
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{ errorMessage }</ErrorText>
        <Button
          _onClick={({ Email, password }) => {
            handleLoginPress({ Email, password })}}
          text="로그인하기"
        />
      </Container>
    </React.Fragment>
  )
}

export default Login;