import { useContext, useEffect, useState } from 'react'
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
import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeesContext } from '../../../../../context/Coffes'

interface CoffeSelectedProps {
  coffeeImg: string
  coffeeName: string
  amount: number
  value: number
}

export function CoffeSelected({
  coffeeImg,
  coffeeName,
  amount,
  value,
}: CoffeSelectedProps) {
  const { coffeesCart, setCoffeesCart } = useContext(CoffeesContext)
  const [amountOfCoffees, setAmountOfCoffees] = useState(amount)

  function addAmount() {
    setAmountOfCoffees(amountOfCoffees + 1)
  }

  function decreaseAmount() {
    if (!(amountOfCoffees === 1)) {
      setAmountOfCoffees(amountOfCoffees - 1)
    }
  }

  useEffect(() => {
    const copyCoffeesCart = [...coffeesCart]

    const coffeeAmountCartUpdadted = copyCoffeesCart.map((coffeeObject) => {
      if (coffeeObject.coffeeName === coffeeName) {
        return { ...coffeeObject, amount: amountOfCoffees }
      } else {
        return coffeeObject
      }
    })

    setCoffeesCart(coffeeAmountCartUpdadted)
  }, [amountOfCoffees])

  return (
    <>
      <CoffeSelectedContainer>
        <CoffeImageInfoContaine>
          <CoffeImage src={coffeeImg} />
          <CoffeInfoContainer>
            <CoffeName>{coffeeName}</CoffeName>

            <AmountRemoveContainer>
              <Amount>
                <Minus
                  width={'0.875rem'}
                  height={'0.875rem'}
                  color="#8047F8"
                  cursor={'pointer'}
                  onClick={decreaseAmount}
                />
                <AmountNumber>{amountOfCoffees}</AmountNumber>
                <Plus
                  width={'0.875rem'}
                  height={'0.875rem'}
                  color="#8047F8"
                  cursor={'pointer'}
                  onClick={addAmount}
                />
              </Amount>
              <RemoveCoffe>
                <Trash color="#8047F8" width={'1rem'} height={'1rem'} />
                <RemoveText>Remover</RemoveText>
              </RemoveCoffe>
            </AmountRemoveContainer>
          </CoffeInfoContainer>
        </CoffeImageInfoContaine>

        <Price>
          R$ <span>{(value / 100).toFixed(2)}</span>
        </Price>
      </CoffeSelectedContainer>
      <Line />
    </>
  )
}
