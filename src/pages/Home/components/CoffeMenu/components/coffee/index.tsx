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
import ExpressoTradicionalImg from '../../../../../../assets/coffees/Type=Expresso.svg'

export function Coffe() {
  return (
    <CoffeeContainer>
      <CoffeeImg src={ExpressoTradicionalImg} alt="" />

      {/* <CoffeeCharacteristicsContainer> */}
      <CoffeeCharacteristics>Tradicional</CoffeeCharacteristics>
      {/* </CoffeeCharacteristicsContainer> */}

      <CoffeeName>Expresso Tradicional</CoffeeName>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>

      <BuyContainer>
        <Coin>
          R$ <Value>9,90</Value>
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
