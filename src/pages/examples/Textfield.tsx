import { useState } from 'react'
import styled from "styled-components"
import CmInput from '~/components/CmInput'
import CmTextarea from '~/components/CmTextarea'
import { space } from '~/styles/helpers/mixins'
import { PageSubTitle, PageTitle } from "~/styles/layout/Wrapper"

const ExampleItem = styled.div`
  ${space({x:'8px'})};
  display: flex;
`

function Textfield() {
	const [inputValue, setInputValue] = useState('')
	
	return (
		<div>
			<PageTitle>Textfield</PageTitle>
			<div className="p-3 mb-5 space-y-5">
				<div style={{marginBottom: '10px'}}>
					<PageSubTitle>Input</PageSubTitle>
					<ExampleItem>
						<CmInput type='text' value={inputValue} placeholder='입력해주세요.' onChange={(e) => setInputValue(e.target.value)} />
						<CmInput type='text' value={inputValue} placeholder='Disabled' disabled onChange={(e) => setInputValue(e.target.value)} />
						<CmInput type='text' value={inputValue} placeholder='Readonly' readonly onChange={(e) => setInputValue(e.target.value)} />
					</ExampleItem>
				</div>
				<div style={{marginBottom: '10px'}}>
					<PageSubTitle>Input with Label</PageSubTitle>
					<ExampleItem>
						<CmInput type='text' value={inputValue} label='label' placeholder='입력해주세요.' onChange={(e) => setInputValue(e.target.value)} />
						<CmInput type='text' value={inputValue} label='validate' placeholder='Validate' validMessage='is error' isValid onChange={(e) => setInputValue(e.target.value)} />
						<CmInput type='text' value={inputValue} label='horizontal label' labelPosition='horizontal' placeholder='입력해주세요.' onChange={(e) => setInputValue(e.target.value)} />
					</ExampleItem>
				</div>				
				<div style={{marginBottom: '10px'}}>
					<PageSubTitle>Textarea</PageSubTitle>
					<ExampleItem>
						<CmTextarea value={inputValue} placeholder='입력해주세요.' onChange={(e) => setInputValue(e.target.value)} />
						<CmTextarea value={inputValue} placeholder='Disabled' disabled onChange={(e) => setInputValue(e.target.value)} />
						<CmTextarea value={inputValue} placeholder='Readonly' readonly onChange={(e) => setInputValue(e.target.value)} />
					</ExampleItem>
				</div>
				<div style={{marginBottom: '10px'}}>
					<PageSubTitle>Textarea with Label</PageSubTitle>
					<ExampleItem>
						<CmTextarea value={inputValue} label='label' placeholder='입력해주세요.' onChange={(e) => setInputValue(e.target.value)} />
						<CmTextarea value={inputValue} label='validate' placeholder='Validate' validMessage='is error' isValid onChange={(e) => setInputValue(e.target.value)} />
						<CmTextarea value={inputValue} label='horizontal label' labelPosition='horizontal' placeholder='입력해주세요.' onChange={(e) => setInputValue(e.target.value)} />
					</ExampleItem>
				</div>
			</div>
		</div>
	)
}

export default Textfield
