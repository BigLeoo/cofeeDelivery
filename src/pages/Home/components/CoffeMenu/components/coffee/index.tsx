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
  let numbersOfCoffees

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
          />
          <Amount>1</Amount>
          <Plus
            width={'0.875rem'}
            height={'0.875rem'}
            color="#8047F8"
            cursor={'pointer'}
          />
        </AmountContainer>
        <ShoppingCartContainer>
          <ShoppingCart weight="fill" width={'1.375rem'} height={'1.375rem'} />
        </ShoppingCartContainer>
      </BuyContainer>
    </CoffeeContainer>
  )
}
