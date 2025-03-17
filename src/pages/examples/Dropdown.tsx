import { useState } from "react"
import styled from "styled-components"
import CmDropdown from "~/components/Cmdropdown"
import { space } from "~/styles/helpers/mixins"
import { PageSubTitle, PageTitle } from "~/styles/layout/Wrapper"

const ExampleItem = styled.div`
  ${space({ x: "8px" })};
  display: flex;
  align-items: center;
`

function ExampleDropdown() {
	const [exampleValue, setExampleValue] = useState<string | string[]>("")

	const exampleOptions = [
		{ label: "Option 1", value: "Value 1" },
		{ label: "Option 2", value: "Value 2" }
	]

	const handleDropdownChange = (selected: string | string[]) => {
		setExampleValue(selected)
	}

	return (
		<div>
			<PageTitle>Dropdown</PageTitle>
			<div className="p-3 mb-5 space-y-5">
				<div>
					<PageSubTitle>Status</PageSubTitle>
					<ExampleItem>
						<CmDropdown
							value={exampleValue}
							options={exampleOptions}
							onChange={handleDropdownChange}
						/>
						<CmDropdown
							value={exampleValue}
							options={exampleOptions}
							readonly
							onChange={handleDropdownChange}
						/>
						<CmDropdown
							value={exampleValue}
							options={exampleOptions}
							disabled
							onChange={handleDropdownChange}
						/>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Multi Select</PageSubTitle>
					<ExampleItem>
						<CmDropdown
							value={exampleValue} // ✅ multiple 모드에서도 배열 유지됨
							options={exampleOptions}
							mode="multiple"
							onChange={handleDropdownChange}
						/>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Dropdown with Label</PageSubTitle>
					<ExampleItem>
						<CmDropdown
							label="label"
							value={exampleValue}
							options={exampleOptions}
							onChange={handleDropdownChange}
						/>
						<CmDropdown
							label="validate"
							value={exampleValue}
							options={exampleOptions}
							validMessage="is error"
							isValid
							onChange={handleDropdownChange}
						/>
					</ExampleItem>
				</div>
			</div>
		</div>
	)
}

export default ExampleDropdown