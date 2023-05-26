import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BoldP,
  BoldStreetText,
  DolarPinContainer,
  InfoContainer,
  MapPinContainer,
  NormalP,
  OrderInfoContainer,
  OrdersInfosContainer,
  TimerPinContainer,
} from './styles'

export function InfoOrder() {
  return (
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
  )
}
