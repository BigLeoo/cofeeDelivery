import { Addres } from './components/Addres'
import { CoffeCard } from './components/CoffeCard'
import { Paymant } from './components/Paymant'
import { AddresPaymantContainer, ContentContainer, Title } from './styles'

export function Cart() {
  return (
    <ContentContainer>
      <div>
        <Title>Complete o seu pedido</Title>
        <AddresPaymantContainer>
          <Addres />
          <Paymant />
        </AddresPaymantContainer>
      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <CoffeCard />
      </div>
    </ContentContainer>
  )
}
