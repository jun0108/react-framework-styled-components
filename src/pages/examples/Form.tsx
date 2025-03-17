import { useState } from "react"
import CmInput from "~/components/CmInput"
import { PageSubTitle, PageTitle, Form } from "~/styles/layout/Wrapper"

function ExampleForm() {  
	const [form, setForm] = useState({
		inputValue: '',
	})	

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, inputValue: e.target.value })
	}

	return (
		<div>
			<PageTitle>Form</PageTitle>
			<PageSubTitle>default</PageSubTitle>
			<Form>
				<CmInput 
					type="text" 
					label="ID"
					value={form.inputValue} 
					placeholder="입력해주세요." 
					onChange={handleChange} 
				/>
			</Form>
		</div>
	)
}

export default ExampleForm 