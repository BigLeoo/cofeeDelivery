import { MapPinLine } from 'phosphor-react'
import {
  AddresContainer,
  ContainerInput,
  InputCep,
  InputCity,
  InputComplement,
  InputContainer,
  InputNeighborhood,
  InputNumber,
  InputState,
  InputStreet,
  Subtitle,
  TextContainer,
  Title,
  TitleContainer,
} from './style'

export function Addres() {
  return (
    <AddresContainer>
      <TitleContainer>
        <MapPinLine width={'1.375rem'} height={'1.375rem'} color="#C47F17" />
        <TextContainer>
          <Title>Endereço de Entrega</Title>
          <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
        </TextContainer>
      </TitleContainer>

      <InputContainer>
        <InputCep type="text" placeholder="CEP" />
        <InputStreet type="text" placeholder="Rua" />

        <ContainerInput>
          <InputNumber type="text" placeholder="Número" />
          <InputComplement type="text" placeholder="Complemento" />
        </ContainerInput>

        <ContainerInput>
          <InputNeighborhood type="text" placeholder="Bairro" />
          <InputCity type="text" placeholder="Cidade" />
          <InputState type="text" placeholder="UF" />
        </ContainerInput>
      </InputContainer>
    </AddresContainer>
  )
}
