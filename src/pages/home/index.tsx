import styled from 'styled-components'
import { typo } from '~/styles/helpers/mixins'

const HomeWrapper = styled.div`
  padding: 130px 100px;
`
const HomeTitle = styled.h1`
  ${typo({size:"var(--font-size-32)", weight: 700})};
  margin-bottom: 20px;
`
const HomeSubTitle = styled.h2`
  ${typo({size:"var(--font-size-22)", color:"var(--color-gray-600)", weight: 700})};
`

const Home = () => {

	return (
		<HomeWrapper>
			<HomeTitle>
				hi :)
			</HomeTitle>
			<HomeSubTitle>
				React + styled-components
			</HomeSubTitle>
		</HomeWrapper>
	)
}

export default Home