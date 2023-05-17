import { Coffe } from './components/coffee'
import { Container, HeaderMenu, Menu } from './style'

export function CoffeMenu() {
  return (
    <Container>
      <HeaderMenu>Nossos Cafés</HeaderMenu>
      <Menu>
        <Coffe />
      </Menu>
    </Container>
  )
}
