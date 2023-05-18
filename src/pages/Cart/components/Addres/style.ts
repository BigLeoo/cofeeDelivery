import styled from 'styled-components'

export const AddresContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  width: 40rem;
  height: 23.25rem;
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;
`

export const TitleContainer = styled.div`
  display: flex;
`

export const TextContainer = styled.div`
  margin-left: 0.5rem;
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.313rem;

  color: ${(props) => props.theme['base-subtitlie']};
`
export const Subtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex-wrap: wrap; */

  gap: 1rem 0.75rem;
`

export const Input = styled.input`
  padding: 12px;
  height: 2.625rem;
  border: 0.063rem solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  background: ${(props) => props.theme['base-input']};

  font-size: 0.875rem;
  line-height: 1.125rem;
  color: ${(props) => props.theme['base-text']};
`

export const InputCep = styled(Input)`
  width: 12.5rem;
`

export const InputStreet = styled(Input)`
  width: 35rem;
`

export const InputNumber = styled(Input)`
  width: 12.5rem;
`

export const InputComplement = styled(Input)`
  width: 21.75rem;
`

export const InputNeighborhood = styled(Input)`
  width: 12.5rem;
`

export const InputCity = styled(Input)`
  width: 17.25rem;
`

export const InputState = styled(Input)`
  width: 3.75rem;
`

export const ContainerInput = styled.div`
  display: flex;
  gap: 0.75rem;
`
