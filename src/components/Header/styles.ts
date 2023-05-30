/* eslint-disable dot-notation */
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['background']};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 10rem 2rem 10rem;
  width: 90rem;
  /* width: 100%;
  max-width: 90rem; */
`

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const ButtonContainer = styled.button`
  color: ${(props) => props.theme['purple']};
  background: ${(props) => props.theme['purple-light']};
  font-size: 0.875rem;

  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`

export const IconContainer = styled.div`
  position: relative;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;

  cursor: pointer;
`

export const CounterCart = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: -0.522rem;
  top: -0.5rem;

  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  color: white;
`
