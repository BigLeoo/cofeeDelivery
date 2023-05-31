import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BuyContainer,
  AmountContainer,
  CoffeeCharacteristics,
  CoffeeContainer,
  CoffeeDescription,
  CoffeeImg,
  CoffeeName,
  Coin,
  Value,
  Amount,
  ShoppingCartContainer,
  CoffeeCharacteristicsContainer,
} from './style'

import { v4 as uuidv4 } from 'uuid'
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../../../../../context/Coffes'

interface CoffeeProps {
  coffeImg: string
  coffeCharacteristics: string[]
  coffeeName: string
  coffeDescription: string
  value: number
  amount: number
}

export function Coffe({
  coffeImg,
  coffeCharacteristics,
  coffeeName,
  coffeDescription,
  value,
  amount,
}: CoffeeProps) {
  const { setCoffeesCart, coffees, setCoffees } = useContext(CoffeesContext)
  const [amountOfCoffees, setAmountOfCoffees] = useState(amount)

  function additionAmount() {
    setAmountOfCoffees(amountOfCoffees + 1)
  }

  function decreaseAmount() {
    if (!(amountOfCoffees === 0)) {
      setAmountOfCoffees(amountOfCoffees - 1)
    }
  }

  function addCoffeeToCart() {
    const copyCoffes = [...coffees]

    const coffeAmountUpdated = copyCoffes.map((coffeeObject) => {
      if (coffeeObject.coffeeName === coffeeName) {
        return { ...coffeeObject, amount: amountOfCoffees }
      } else {
        return coffeeObject
      }
    })

    setCoffees(coffeAmountUpdated)

    const coffeesFilteredByAmount = coffeAmountUpdated.filter(
      (coffeeObject) => coffeeObject.amount > 0,
    )

    setCoffeesCart(coffeesFilteredByAmount)
  }

  return (
    <CoffeeContainer>
      <CoffeeImg src={coffeImg} alt="" />
      {coffeCharacteristics.length === 1 ? (
        <CoffeeCharacteristics>{coffeCharacteristics[0]}</CoffeeCharacteristics>
      ) : (
        <CoffeeCharacteristicsContainer>
          {coffeCharacteristics.map((coffeCharacteristic) => (
            <CoffeeCharacteristics key={uuidv4()}>
              {coffeCharacteristic}
            </CoffeeCharacteristics>
          ))}
        </CoffeeCharacteristicsContainer>
      )}
      <CoffeeName>{coffeeName}</CoffeeName>
      <CoffeeDescription>{coffeDescription}</CoffeeDescription>
      <BuyContainer>
        <Coin>
          R$ <Value>{(value / 100).toFixed(2)}</Value>
        </Coin>
        <AmountContainer>
          <Minus
            width={'0.875rem'}
            height={'0.875rem'}
            color="#8047F8"
            cursor="pointer"
            onClick={decreaseAmount}
          />
          <Amount>{amountOfCoffees}</Amount>
          <Plus
            width={'0.875rem'}
            height={'0.875rem'}
            color="#8047F8"
            cursor={'pointer'}
            onClick={additionAmount}
          />
        </AmountContainer>
        <ShoppingCartContainer>
          <ShoppingCart
            weight="fill"
            width={'1.375rem'}
            height={'1.375rem'}
            onClick={addCoffeeToCart}
          />
        </ShoppingCartContainer>
      </BuyContainer>
    </CoffeeContainer>
  )
}
