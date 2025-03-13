import { useState } from "react"
import styled from "styled-components"
import CmDropdown from "~/components/Cmdropdown"
import { space } from '~/styles/helpers/mixins'
import { PageSubTitle, PageTitle } from "~/styles/layout/Wrapper"

const ExampleItem = styled.div`
  ${space({x:'8px'})};
  display: flex;
  align-items: center;
`

function Dropdowns() {
	const [exampleOptions, setExampleOptions] = useState([
		{ label: "Option 1", value: "Value 1" },
		{ label: "Option 2", value: "Value 2" }
	])
	return (
		<div>
			<PageTitle>Dropdown</PageTitle>
			<div className="p-3 mb-5 space-y-5">
				<div>
					<PageSubTitle>Status</PageSubTitle>
					<ExampleItem>
						<CmDropdown
							options={exampleOptions}
							onChange={(value) => console.log(value)}
						/>
						<CmDropdown
							options={exampleOptions}
							readonly
							onChange={(value) => console.log(value)}
						/>
						<CmDropdown
							options={exampleOptions}
							disabled
							onChange={(value) => console.log(value)}
						/>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Multi Select</PageSubTitle>
					<ExampleItem>
						<CmDropdown
							options={exampleOptions}
							mode="multiple"
							onChange={(value) => console.log(value)}
						/>
					</ExampleItem>
				</div>
			</div>
		</div>
	)
}

export default Dropdowns
