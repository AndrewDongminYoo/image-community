import React from 'react';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { history } from '../redux/configureStore';

const BtnContainer = styled.div`
  box-sizing: border-box;
  border: none;
  display: block;
  position: fixed;
  right: 16px;
  bottom: 32px;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  text-align: center;
  border-radius: 24px;
  width: 48px;
  height: 48px;
  line-height: 55px;
`;

const AddPost = (props) => {

  const IconStyle = {
    fontSize: 26,
    fontWeight: 900,
    alignSelf: "center",
    color: "white",
  }

  return (
    <BtnContainer onClick={() => {
      history.push('/write')
    }}
    >
      <EditOutlined style={IconStyle} />
    </BtnContainer>
  )
}


export default AddPost;