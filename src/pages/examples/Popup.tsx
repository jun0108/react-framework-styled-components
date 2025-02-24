import { useState } from 'react'
import styled from "styled-components"
import CmModal from '~/components/CmModal';

const ExampleItem = styled.div`
  ${space({x:'8px'})};
  display: flex;
  align-items: center;
`

function Popups() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="">
			<PageTitle>Popups</PageTitle>
			<div className="p-3 mb-5 space-y-5">
				<div>
					<PageSubTitle>Modal</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__full--primary-sm"
							onClick={() => setIsOpen(true)}>
							open
						</button>
					</ExampleItem>
				</div>
			</div>
			<CmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)} 
        popupTitle="Modal Title"
				popupFooter={
          <>
						<button type="button" className="btn__line--gray-sm"
							onClick={() => setIsOpen(false)}>
							닫기
						</button>
						<button type="button" className="btn__full--primary-sm">
							확인
						</button>
          </>
        }
      >
        <p>Hi</p>
      </CmModal>
		</div>
	)
}

export default Popups
