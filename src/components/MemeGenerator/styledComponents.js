import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 767px) {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
`
export const SmallDevicesMainContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 767px) {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
  }
`
export const SmallDevicesImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 180px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  align-items: center;
  align-self: center;
  padding: 7px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
  font-size: 45px;
  align-self: center;
`

export const TextInsideContainer = styled.p`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => `${props.fontSize}px`};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px;
  width: 90%;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7px;
    width: 45%;
  }
`
export const Label = styled.label`
  font-size: 14px;
  color: #7e858e;
  margin-top: 15px;
`
export const InputElement = styled.input`
  width: 100%;
  height: 40px;
  background-color: inherit;
  border-color: #5a7184;
  font-family: 'Open Sans';
  color: ;#1e293b;
  font-size: 14px;
  border-radius: 7px;
  padding-left: 10px;
  margin-top: 3px;
`
export const SelectElement = styled.select`
  width: 100%;
  height: 40px;
  background-color: inherit;
  border-color: #5a7184;
  font-family: 'Open Sans';
  color: ;#1e293b;
  font-size: 14px;
  border-radius: 7px;
  padding-left: 10px;
  margin-top: 3px;
`
export const OptionElement = styled.option`
  order-color: #5a7184;
  font-family: 'Open Sans';
  font-weight: bold;
`
export const MemeGenerateButton = styled.button`
  height: 40px;
  width: 120px;
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open sans';
  border-width: 0px;
  border-radius: 10px;
  margin-top: 10px;
`
export const AboveMediumDevicesImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  margin-top: 30px;
  height: 500px;
  background-size: cover;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 7px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
