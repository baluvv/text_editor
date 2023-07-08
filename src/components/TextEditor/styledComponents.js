import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  border-width: 0px;
  background-color: transparent;
  margin-right: 20px;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  width: 100%;
  background-color: #334155;
  border-radius: 4px;
  height: 90%;
  margin-top: 0px;
  color: #ffffff;
  outline: none;
  border: 1px solid #cbd5e1;
  padding: 15px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
