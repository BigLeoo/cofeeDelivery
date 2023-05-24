import {
  Amount,
  AmountNumber,
  AmountRemoveContainer,
  CoffeImage,
  CoffeImageInfoContaine,
  CoffeInfoContainer,
  CoffeName,
  CoffeSelectedContainer,
  Line,
  Price,
  RemoveCoffe,
  RemoveText,
} from './style'
import coffeImage from '../../../../../assets/coffees/Type=Expresso.svg'
import { Minus, Plus, Trash } from 'phosphor-react'

export function CoffeSelected() {
  return (
    <>
      <CoffeSelectedContainer>
        <CoffeImageInfoContaine>
          <CoffeImage src={coffeImage} />
          <CoffeInfoContainer>
            <CoffeName>Expresso Tradcional</CoffeName>

            <AmountRemoveContainer>
              <Amount>
                <Minus
                  width={'0.875rem'}
                  height={'0.875rem'}
                  color="#8047F8"
                  cursor={'pointer'}
                />
                <AmountNumber>1</AmountNumber>
                <Plus
                  width={'0.875rem'}
                  height={'0.875rem'}
                  color="#8047F8"
                  cursor={'pointer'}
                />
              </Amount>
              <RemoveCoffe>
                <Trash color="#8047F8" width={'1rem'} height={'1rem'} />
                <RemoveText>Remover</RemoveText>
              </RemoveCoffe>
            </AmountRemoveContainer>
          </CoffeInfoContainer>
        </CoffeImageInfoContaine>

        <Price>R$ 9,90</Price>
      </CoffeSelectedContainer>
      <Line />
    </>
  )
}
