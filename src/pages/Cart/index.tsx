import { Addres } from './components/Addres'
import { CoffeCard } from './components/CoffeCard'
import { Paymant } from './components/Paymant'
import { AddresPaymantContainer, ContentContainer, Title } from './styles'
import { useForm, FormProvider } from 'react-hook-form'

export function Cart() {
  const confirmedOrderedPaymantForm = useForm()

  function dataConfirmedOrderedPaymant(data: any) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmedOrderedPaymantForm}>
      <form
        onSubmit={confirmedOrderedPaymantForm.handleSubmit(
          dataConfirmedOrderedPaymant,
        )}
      >
        <ContentContainer>
          <div>
            <Title>Complete o seu pedido</Title>
            <AddresPaymantContainer>
              <Addres />
              <Paymant />
            </AddresPaymantContainer>
          </div>

          <div>
            <Title>Cafés selecionados</Title>
            <CoffeCard />
          </div>
        </ContentContainer>
      </form>
    </FormProvider>
  )
}
