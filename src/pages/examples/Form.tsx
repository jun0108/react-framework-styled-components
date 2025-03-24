import { useState } from "react"
import CmDropdown from "~/components/Cmdropdown"
import CmInput from "~/components/CmInput"
import CmTextarea from "~/components/CmTextarea"
import Icon from "~/components/Icon"
import { PageSubTitle, PageTitle, SearchForm, SearchFormForm, SearchFormButton, Form, FormItem, FormButton } from "~/styles/layout/Wrapper"

function ExampleForm() {  
	const [searchForm, setSearchForm] = useState({
		type: '',
		typeOptions: [
			{ label: "Option 1", value: "Value 1" },
			{ label: "Option 2", value: "Value 2" }
		],
		keyword: '',
	})	

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setSearchForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleDropdownChange = (selected: string | string[]) => {
		setSearchForm((prev) => ({ ...prev, type: Array.isArray(selected) ? selected.join(", ") : selected }))
	}

	return (
		<div>
			<PageTitle>Form</PageTitle>
			<PageSubTitle>Search Form</PageSubTitle>
			<SearchForm> 
				<SearchFormForm>
					<CmDropdown
						style={{width: "180px"}}						
						label="type"
						labelPosition="horizontal"
						value={searchForm.type} 
						options={searchForm.typeOptions}
						onChange={handleDropdownChange}  
					/>
					<CmInput 
						type="text"
						value={searchForm.keyword}
						onChange={handleChange}
					/>
				</SearchFormForm>
				<SearchFormButton>
					<button type="button" className="btn__line--gray-md">
						<Icon name="reset__line--4b5" alt="초기화" width='18' height='18'/>
						초기화
					</button>
					<button type="button" className="btn__full--primary-md">
						<Icon name="search__line--fff" alt="검색" width='18' height='18'/>
						검색
					</button>
				</SearchFormButton>
			</SearchForm>
			<PageSubTitle>Form</PageSubTitle>
			<Form>
				<FormItem>
					<CmDropdown
						style={{width: "150px"}}
						label="type"
						labelPosition="horizontal"
						required
						value={searchForm.type} 
						options={searchForm.typeOptions}
						onChange={handleDropdownChange}  
					/>
					<CmInput 
						type="text"
						value={searchForm.keyword}
						onChange={handleChange}
					/>
				</FormItem>
				<FormItem>
					<CmTextarea 
						style={{width: "100%"}}						
						label="특이사항"
						labelPosition="horizontal"
						value={searchForm.keyword}
						onChange={handleChange}
					/>
				</FormItem>
				<FormButton>
					<button type="button" className="btn__line--gray-md">
						이전
					</button>
					<button type="button" className="btn__full--primary-md">
						저장
					</button>
				</FormButton>
			</Form>
		</div>
	)
}

export default ExampleForm
