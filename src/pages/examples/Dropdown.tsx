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
	return (
		<div>
			<PageTitle>Dropdown</PageTitle>
			<div className="p-3 mb-5 space-y-5">
				<div>
					<PageSubTitle>Status</PageSubTitle>
					<ExampleItem>
						<CmDropdown
							options={[
								{ label: "Option 1", value: "1" },
								{ label: "Option 2", value: "2" }
							]}
							onChange={(value) => console.log(value)}
						/>
						<CmDropdown
							options={[
								{ label: "Option 1", value: "1" },
								{ label: "Option 2", value: "2" }
							]}
							readonly
							onChange={(value) => console.log(value)}
						/>
						<CmDropdown
							options={[
								{ label: "Option 1", value: "1" },
								{ label: "Option 2", value: "2" }
							]}
							disabled
							onChange={(value) => console.log(value)}
						/>
					</ExampleItem>
				</div>
			</div>
		</div>
	)
}

export default Dropdowns
