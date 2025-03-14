import styled from "styled-components"
import CmTooltip from "~/components/CmTooltip"
import { space } from '~/styles/helpers/mixins'
import { PageSubTitle, PageTitle } from "~/styles/layout/Wrapper"

const ExampleItem = styled.div`
  ${space({x:'8px'})};
  display: flex;
  align-items: center;
`

function Buttons() {
	return (
		<div>
			<PageTitle>Action Button</PageTitle>
			<div className="p-3 mb-5 space-y-5">
				<div>
					<PageSubTitle>Trigger</PageSubTitle>
					<ExampleItem>
						<CmTooltip text="안녕하세요! 툴팁입니다." position="top">
							<button type="button" className="btn__full--primary-md">hover</button>
						</CmTooltip>
						<CmTooltip text="안녕하세요! 툴팁입니다." position="top" trigger="click">
							<button type="button" className="btn__full--primary-md">click</button>
						</CmTooltip>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Position</PageSubTitle>
					<ExampleItem>
						<CmTooltip text="안녕하세요! 툴팁입니다." position="top">
							<button type="button" className="btn__full--primary-md">top</button>
						</CmTooltip>
						<CmTooltip text="안녕하세요! 툴팁입니다." position="bottom" >
							<button type="button" className="btn__full--primary-md">bottom</button>
						</CmTooltip>
						<CmTooltip text="안녕하세요! 툴팁입니다." position="left" >
							<button type="button" className="btn__full--primary-md">left</button>
						</CmTooltip>
						<CmTooltip text="안녕하세요! 툴팁입니다." position="right" >
							<button type="button" className="btn__full--primary-md">right</button>
						</CmTooltip>
					</ExampleItem>
				</div>
			</div>
		</div>
	)
}

export default Buttons
