import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  ChoosePaymantButton,
  ChoosePaymantButtonContainer,
  HeaderContainer,
  PaymantContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './style'

export function Paymant() {
  return (
    <PaymantContainer>
      <HeaderContainer>
        <CurrencyDollar
          width={'1.375rem'}
          height={'1.375rem'}
          color="#8047F8"
        />

        <TitleContainer>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </TitleContainer>
      </HeaderContainer>

      <ChoosePaymantButtonContainer>
        <ChoosePaymantButton aria-selected>
          <CreditCard color="#8047F8" width={'1rem'} height={'1rem'} />
          Catão de Crédito
        </ChoosePaymantButton>
        <ChoosePaymantButton>
          <Bank color="#8047F8" width={'1rem'} height={'1rem'} />
          Catão de Débito
        </ChoosePaymantButton>
        <ChoosePaymantButton>
          <Money color="#8047F8" width={'1rem'} height={'1rem'} />
          Dinheiro
        </ChoosePaymantButton>
      </ChoosePaymantButtonContainer>
    </PaymantContainer>
  )
}
