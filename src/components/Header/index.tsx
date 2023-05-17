import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import {
  ButtonContainer,
  DivContainer,
  HeaderContainer,
  IconContainer,
} from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <DivContainer>
        <ButtonContainer>
          <MapPin weight="fill" width={'1.375rem'} height={'1.375rem'} />
          Florianópolis, SC
        </ButtonContainer>
        <IconContainer>
          <ShoppingCart weight="fill" width={'1.375rem'} height={'1.375rem'} />
        </IconContainer>
      </DivContainer>
    </HeaderContainer>
  )
}
