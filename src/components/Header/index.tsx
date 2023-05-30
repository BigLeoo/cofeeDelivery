import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import {
  ButtonContainer,
  CounterCart,
  DivContainer,
  HeaderContainer,
  IconContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/Coffes'

export const Header = () => {
  const { coffeesCart } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <DivContainer>
        <ButtonContainer>
          <MapPin weight="fill" width={'1.375rem'} height={'1.375rem'} />
          Florianópolis, SC
        </ButtonContainer>
        <IconContainer>
          {coffeesCart.length > 0 ? (
            <>
              <CounterCart>{coffeesCart.length}</CounterCart>
              <ShoppingCart
                weight="fill"
                width={'1.375rem'}
                height={'1.375rem'}
              />
            </>
          ) : (
            <ShoppingCart
              weight="fill"
              width={'1.375rem'}
              height={'1.375rem'}
            />
          )}
        </IconContainer>
      </DivContainer>
    </HeaderContainer>
  )
}
