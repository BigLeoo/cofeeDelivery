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
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const { coffeesCart } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="CoffeeMenu">
        <img src={logo} alt="" />
      </NavLink>

      <DivContainer>
        <ButtonContainer>
          <MapPin weight="fill" width={'1.375rem'} height={'1.375rem'} />
          Florianópolis, SC
        </ButtonContainer>
        <NavLink to="/cart" title="Cart">
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
        </NavLink>
      </DivContainer>
    </HeaderContainer>
  )
}
