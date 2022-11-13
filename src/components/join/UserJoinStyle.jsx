import styled from 'styled-components'

export const JoinForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`

export const EmailBox = styled.div`
  display: flex;
`

export const EmailCheckButton = styled.button`
  width: 100%;
  max-width: 90px;
  height: 40px;
  margin-top: 60px;
  margin-left: 10px;
  border: none;
  outline: none;
`

export const LabelText = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: black;
  font-size: 14px;
  font-weight: 200;
`

export const InputJoin = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  border: 1px solid rgb(207, 207, 207);
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`
export const ErrorText = styled.p`
  color: #bf1650;
`

export const ButtonJoin = styled.button`
  display: block;
  appearance: none;
  margin-top: 40px;
  border: 1px solid #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`

export const InputContainer = styled.div`
  position: relative;
`

export const InputButton = styled.div`
  position: absolute;
  bottom: 10px;
  left: 270px;
`

export const InputButtonEmail = styled.div`
  position: absolute;
  bottom: 20px;
  left: 172px;
`