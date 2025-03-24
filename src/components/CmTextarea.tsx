import { useState } from "react"
import { TextfieldLabel, TextfieldWrapper,TextfieldMessage, TextfieldTextarea } from "~/styles/components/Textfield"

export interface ITextarea {
	style?: React.CSSProperties;
  value: string;
  placeholder?: string;
  labelPosition?: "vertical" | "horizontal";
  label?: string;
  resize?: "none" | "both" | "horizontal" | "vertical";
	isValid?: boolean;
	validMessage?: string;
	disabled?: boolean;
	readonly?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CmTextarea({ style, value, placeholder = "입력해주세요.", labelPosition = "vertical", label, resize = "vertical", disabled = false, readonly = false,  isValid = false, validMessage, required = false, onChange }: ITextarea) {
	const [inputValue, setInputValue] = useState<string>(value)

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value)
		onChange(e)
	}

	return (
		<TextfieldWrapper $labelPosition={labelPosition}>
			{label && <TextfieldLabel $required={required} $labelPosition={labelPosition}><span>{label}</span></TextfieldLabel>}
			<div>
				<TextfieldTextarea style={style} value={inputValue} placeholder={placeholder} disabled={disabled} readOnly={readonly} onChange={handleChange} $isValid={isValid} $resize={resize}/>
				{isValid && <TextfieldMessage>{validMessage}</TextfieldMessage>}
			</div>
		</TextfieldWrapper>
	)
}

export default CmTextarea