import { Addres } from './components/Addres'
import { CoffeCard } from './components/CoffeCard'
import { Paymant } from './components/Paymant'
import { AddresPaymantContainer, ContentContainer, Title } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodType } from 'zod'

export function Cart() {
  type FormData = {
    cep: number
    street: string
    number: number
    complement?: string
    neighborhood: string
    city: string
    state: string
  }

  const schemaValidadtion: ZodType<FormData> = z.object({
    cep: z.number().min(11111111).max(99999999),
    street: z.string().min(3).max(50),
    number: z.number().min(1).max(9999),
    complement: z.optional(z.string().max(100)),
    neighborhood: z.string().min(3).max(40),
    city: z.string().min(3).max(40),
    state: z.string().min(1).max(2),
  })

  const confirmedOrderedPaymantForm = useForm<FormData>({
    resolver: zodResolver(schemaValidadtion),
  })

  function dataConfirmedOrderedPaymant(data: FormData) {
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
