import { useContext, useEffect, useState } from 'react'
import { CoffeSelected } from './CoffeSelected'
import {
  CoffeCardContainer,
  CoffeesSelectedContainer,
  ConfirmedOrderButton,
  Cost,
  CostsContent,
  PaymantPrice,
  TotalCost,
  TotalCostContainer,
} from './style'
import { CoffeesContext } from '../../../../context/Coffes'

export function CoffeCard() {
  const { coffeesCart } = useContext(CoffeesContext)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let totalPriceOfCoffees = 0

    coffeesCart.forEach((coffee) => {
      totalPriceOfCoffees =
        (coffee.value / 100) * coffee.amount + totalPriceOfCoffees
    })

    setTotalPrice(totalPriceOfCoffees)
  }, [coffeesCart])

  return (
    <CoffeCardContainer>
      <CoffeesSelectedContainer>
        {coffeesCart.map((coffee) => (
          <CoffeSelected
            key={coffee.coffeeName}
            coffeeImg={coffee.coffeImg}
            coffeeName={coffee.coffeeName}
            amount={coffee.amount}
            value={coffee.value}
          />
        ))}
      </CoffeesSelectedContainer>

      <PaymantPrice>
        <CostsContent>
          <Cost>Total de itens</Cost>
          <Cost>
            R$ <span>{totalPrice.toFixed(2)}</span>
          </Cost>
        </CostsContent>
        <CostsContent>
          <Cost>Entrega</Cost>
          <Cost>R$ 3,50</Cost>
        </CostsContent>
      </PaymantPrice>

      <TotalCostContainer>
        <TotalCost>Total</TotalCost>
        <TotalCost>
          R$ <span>{(totalPrice + 3.5).toFixed(2)}</span>
        </TotalCost>
      </TotalCostContainer>

      <ConfirmedOrderButton>Confirmar Pedido</ConfirmedOrderButton>
    </CoffeCardContainer>
  )
}
