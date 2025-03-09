import styled from 'styled-components'
import router from "~/shared/route" 

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
`
const ErrorTitle = styled.h1`
  ${typo({size:"var(--font-size-48)", weight: 700})};
  margin-bottom: 20px;
`
const ErrorSubTitle = styled.h2`
  ${typo({size:"var(--font-size-32)", color:"var(--color-gray-600)", weight: 700})};
  margin-bottom: 20px;

`

const NotFound = () => {
	return (
		<ErrorWrapper>
			<ErrorTitle>
				404
			</ErrorTitle>
			<ErrorSubTitle>
				페이지를 찾을 수 없습니다 :(
			</ErrorSubTitle>
			<button type="button" className="btn__full--primary-xl"  onClick={() => router.navigate('/')}>
				홈으로 가기
			</button>
		</ErrorWrapper>
	)
}

export default NotFound