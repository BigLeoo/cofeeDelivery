import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BuyContainer,
  AmountContainer,
  CoffeeCharacteristics,
  // CoffeeCharacteristicsContainer,
  CoffeeContainer,
  CoffeeDescription,
  CoffeeImg,
  CoffeeName,
  Coin,
  Value,
  Amount,
  ShoppingCartContainer,
} from './style'
// import ExpressoTradicionalImg from '../../../../../../assets/coffees/Type=Expresso.svg'

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
  return (
    <CoffeeContainer>
      <CoffeeImg src={coffeImg} alt="" />

      {/* <CoffeeCharacteristicsContainer> */}
      <CoffeeCharacteristics>Tradicional</CoffeeCharacteristics>
      {/* </CoffeeCharacteristicsContainer> */}

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
