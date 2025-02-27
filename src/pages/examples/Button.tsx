import styled from "styled-components"

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
					<PageSubTitle>Primary Solid</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__full--primary-sm">
							sm
						</button>
						<button type="button" className="btn__full--primary-md">
							md
						</button>
						<button type="button" className="btn__full--primary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__full--primary-lg">
							lg
						</button>
						<button type="button" className="btn__full--primary-xl">
							xl
						</button>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Secondary Solid</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__full--secondary-sm">
							sm
						</button>
						<button type="button" className="btn__full--secondary-md">
							md
						</button>
						<button type="button" className="btn__full--secondary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__full--secondary-lg">
							lg
						</button>
						<button type="button" className="btn__full--secondary-xl">
							xl
						</button>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Primary Line</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__line--primary-sm">
							sm
						</button>
						<button type="button" className="btn__line--primary-md">
							md
						</button>
						<button type="button" className="btn__line--primary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__line--primary-lg">
							lg
						</button>
						<button type="button" className="btn__line--primary-xl">
							xl
						</button>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Secondary Line</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__line--secondary-sm">
							sm
						</button>
						<button type="button" className="btn__line--secondary-md">
							md
						</button>
						<button type="button" className="btn__line--secondary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__line--secondary-lg">
							lg
						</button>
						<button type="button" className="btn__line--secondary-xl">
							xl
						</button>
					</ExampleItem>
				</div>
			</div>
		</div>
	)
}

export default Buttons
