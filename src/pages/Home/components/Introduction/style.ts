import styled from 'styled-components'
import Background from '../../../../assets/Background.svg'

export const MainContainer = styled.main`
  padding: 5.875rem 10rem 5.875rem 10rem;
  width: 90rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: url(${Background});
`

export const ArticleIntro = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 36.75rem;
  font-size: 1.25rem;
  font-weight: 400;
  font-family: 'Roboto';
  /* height: 7.75rem; */
`

export const HeadIntro = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-style: normal;
  font-size: 3rem;
  line-height: 130%;
`

export const ArticleBulletPoints = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4.125rem;
  width: 35.438rem;

  font-size: 1rem;
  font-weight: 400;
  gap: 1.25rem;
  font-family: 'Roboto';
`

export const BulletPoints1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 14.438rem;
  gap: 0.75rem;
  /* justify-content: center; */
  align-items: center;
  margin-right: 1.25rem;
`

export const BulletPoints2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 18.375rem;
  gap: 0.75rem;
  margin-right: 0.125rem;
  /* justify-content: center; */
  align-items: center;
`
const IconBulletPointContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 1000px;
  color: ${(props) => props.theme.background};
`
export const CartIcon = styled(IconBulletPointContainer)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const PackgeIcon = styled(IconBulletPointContainer)`
  background: ${(props) => props.theme['base-text']};
`
export const TimerIcon = styled(IconBulletPointContainer)`
  background: ${(props) => props.theme.yellow};
`
export const CoffeIcon = styled(IconBulletPointContainer)`
  background: ${(props) => props.theme.purple};
`

export const ImageCoffe = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`
