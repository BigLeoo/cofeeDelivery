import { ReactNode, createContext, useEffect, useState } from 'react'
import image from '../assets/coffees/Type=Americano.svg'

interface Coffee {
  coffeImg: string
  coffeCharacteristics: string[]
  coffeeName: string
  coffeDescription: string
  value: number
  amount: number
}

interface CoffeesContextType {
  coffees: Coffee[]
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

const coffeMenu: Coffee[] = [
  {
    coffeImg: require('../../../../../../assets/coffees/Type=Expresso.svg'),
    coffeCharacteristics: ['TRADICIONAL'],
    coffeeName: 'Expresso Tradicional',
    coffeDescription: 'O tradicional café feito com água quente e grãos moídos',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Americano.svg',
    coffeCharacteristics: ['TRADICIONAL'],
    coffeeName: 'Expresso Americano',
    coffeDescription: 'Expresso diluído, menos intenso que o tradicional',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Expresso Cremoso.svg',
    coffeCharacteristics: ['TRADICIONAL'],
    coffeeName: 'Expresso Cremoso',
    coffeDescription: 'Café expresso tradicional com espuma cremosa',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Café Gelado.svg',
    coffeCharacteristics: ['TRADICIONAL', 'GELADO'],
    coffeeName: 'Expresso Gelado',
    coffeDescription: 'Bebida preparada com café expresso e cubos de gelo',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Café com Leite.svg',
    coffeCharacteristics: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Café com Leite',
    coffeDescription:
      'Meio a meio de expresso tradicional com leite vaporizado',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Latte.svg',
    coffeCharacteristics: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Latte',
    coffeDescription:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Capuccino.svg',
    coffeCharacteristics: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Capuccino',
    coffeDescription:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Macchiato.svg',
    coffeCharacteristics: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Macchiato',
    coffeDescription:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Mochaccino.svg',
    coffeCharacteristics: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Mocaccino',
    coffeDescription:
      'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Chocolate Quente.svg',
    coffeCharacteristics: ['ESPECIAL', 'COM LEITE'],
    coffeeName: 'Chocolate Quente',
    coffeDescription:
      'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Cubano.svg',
    coffeCharacteristics: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    coffeeName: 'Cubano',
    coffeDescription:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Havaiano.svg',
    coffeCharacteristics: ['ESPECIAL'],
    coffeeName: 'Havaiano',
    coffeDescription: 'Bebida adocicada preparada com café e leite de coco',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Árabe.svg',
    coffeCharacteristics: ['ESPECIAL'],
    coffeeName: 'Árabe',
    coffeDescription: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 990,
    amount: 0,
  },
  {
    coffeImg: '../assets/coffees/Type=Irlandês.svg',
    coffeCharacteristics: ['ESPECIAL', 'ALCOÓLICO'],
    coffeeName: 'Irlandês',
    coffeDescription:
      'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 990,
    amount: 0,
  },
]

export const CoffeesContextProvider = ({
  children,
}: CoffeesContextProviderProps) => {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => setCoffees([...coffeMenu]), [])

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}