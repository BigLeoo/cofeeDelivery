import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  OrderInfoContainer,
  BoldP,
  InfoContainer,
  MapPinContainer,
  NormalP,
  SubTitleConfirmedOrder,
  TitleConfirmedOrder,
  TitleContainer,
  BoldStreetText,
  OrdersInfosContainer,
  TimerPinContainer,
  DolarPinContainer,
} from './styles'

export function ConfirmedOrder() {
  return (
    <div>
      <TitleContainer>
        <TitleConfirmedOrder>Uhu! Pedido confirmado</TitleConfirmedOrder>
        <SubTitleConfirmedOrder>
          Agora é só aguardar que logo o café chegará até você
        </SubTitleConfirmedOrder>
      </TitleContainer>

      <InfoContainer>
        <OrdersInfosContainer>
          <OrderInfoContainer>
            <MapPinContainer>
              <MapPin size={'1rem'} color="white" weight="fill" />
            </MapPinContainer>
            <div>
              <NormalP>
                Entrega em
                <BoldStreetText>Rua João Daniel Martinelli, 102</BoldStreetText>
              </NormalP>

              <NormalP>Farrapos - Porto Alegre. RS</NormalP>
            </div>
          </OrderInfoContainer>

          <OrderInfoContainer>
            <TimerPinContainer>
              <Timer size={'1rem'} color="white" weight="fill" />
            </TimerPinContainer>
            <div>
              <NormalP>Previsão de Entrega</NormalP>
              <BoldP>20 min - 30 min</BoldP>
            </div>
          </OrderInfoContainer>

          <OrderInfoContainer>
            <DolarPinContainer>
              <CurrencyDollar size={'1rem'} color="white" weight="fill" />
            </DolarPinContainer>
            <div>
              <NormalP>Previsão de Entrega</NormalP>
              <BoldP>20 min - 30 min</BoldP>
            </div>
          </OrderInfoContainer>
        </OrdersInfosContainer>
      </InfoContainer>
    </div>
  )
}
