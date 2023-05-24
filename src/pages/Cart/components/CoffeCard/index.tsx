import { CoffeSelected } from './CoffeSelected'
import {
  CoffeCardContainer,
  ConfirmedOrderButton,
  Cost,
  CostsContent,
  PaymantPrice,
  TotalCost,
  TotalCostContainer,
} from './style'

export function CoffeCard() {
  return (
    <CoffeCardContainer>
      <CoffeSelected />
      <CoffeSelected />

      <PaymantPrice>
        <CostsContent>
          <Cost>Total de itens</Cost>
          <Cost>R$ 29,70</Cost>
        </CostsContent>
        <CostsContent>
          <Cost>Entrega</Cost>
          <Cost>R$ 3,50</Cost>
        </CostsContent>
      </PaymantPrice>

      <TotalCostContainer>
        <TotalCost>Total</TotalCost>
        <TotalCost>R$ 33,20</TotalCost>
      </TotalCostContainer>

      <ConfirmedOrderButton>Confirmar Pedido</ConfirmedOrderButton>
    </CoffeCardContainer>
  )
}
