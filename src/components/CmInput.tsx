import { useState } from "react"
import { TextfieldLabel, TextfieldWrapper, TextfieldMessage, TextfieldInput } from "~/styles/components/Textfield"

export interface IInput {
	style?: React.CSSProperties;
  type?: "text" | "password" | "number";
  value: string;
  placeholder?: string;
  labelPosition?: "vertical" | "horizontal";
  label?: string;
	isValid?: boolean;
	validMessage?: string;
	disabled?: boolean;
	readonly?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CmInput({ style ,type = "text", value, 	placeholder = "입력해주세요.", labelPosition = "vertical", label, disabled = false, readonly = false, isValid = false, required = false, validMessage, onChange }: IInput) {
	const [inputValue, setInputValue] = useState<string>(value)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
		onChange(e)
	}

	return (
		<TextfieldWrapper $labelPosition={labelPosition}>
			{label && <TextfieldLabel $required={required} $labelPosition={labelPosition}><span>{label}</span></TextfieldLabel>}
			<div>
				<TextfieldInput style={style} type={type} value={inputValue} placeholder={placeholder} disabled={disabled} readOnly={readonly} onChange={handleChange} $isValid={isValid}/>
				{isValid && <TextfieldMessage>{validMessage}</TextfieldMessage>}
			</div>
		</TextfieldWrapper>
	)
}

export default CmInput