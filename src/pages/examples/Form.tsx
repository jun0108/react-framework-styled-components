import { useState } from "react"
import CmDropdown from "~/components/Cmdropdown"
import CmInput from "~/components/CmInput"
import { PageSubTitle, PageTitle, SearchForm, SearchFormForm, SearchFormButton } from "~/styles/layout/Wrapper"

function ExampleForm() {  
	const [form, setForm] = useState({
		type: '',
		typeOptions: [
			{ label: "Option 1", value: "Value 1" },
			{ label: "Option 2", value: "Value 2" }
		],
		keyword: '',
	})	

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleDropdownChange = (selected: string | string[]) => {
		setForm((prev) => ({ ...prev, type: Array.isArray(selected) ? selected.join(", ") : selected }))
	}

	return (
		<div>
			<PageTitle>Form</PageTitle>
			<PageSubTitle>default</PageSubTitle>
			<SearchForm>
				<SearchFormForm>
					<CmDropdown
						label="type"
						labelPosition="horizontal"
						value={form.type} 
						options={form.typeOptions}
						onChange={handleDropdownChange}  
					/>
					<CmInput 
						type="text"
						value={form.keyword} 
						onChange={handleChange} 
					/>
				</SearchFormForm>
				<SearchFormButton>
					<button type="button" className="btn__line--gray-md">
						초기화
					</button>
					<button type="button" className="btn__full--primary-md">
						검색
					</button>
				</SearchFormButton>
			</SearchForm>
		</div>
	)
}

export default ExampleForm