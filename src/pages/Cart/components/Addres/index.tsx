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
import { useFormContext } from 'react-hook-form'

export function Addres() {
  const { register } = useFormContext()

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
        <InputCep type="number" placeholder="CEP" {...register('cep')} />
        <InputStreet type="text" placeholder="Rua" {...register('street')} />

        <ContainerInput>
          <InputNumber
            type="number"
            placeholder="Número"
            {...register('number')}
          />
          <InputComplement
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </ContainerInput>

        <ContainerInput>
          <InputNeighborhood
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <InputCity type="text" placeholder="Cidade" {...register('city')} />
          <InputState type="text" placeholder="UF" {...register('state')} />
        </ContainerInput>
      </InputContainer>
    </AddresContainer>
  )
}
