import { useState } from "react"
import { TextfieldLabel, TextfieldWrapper,TextfieldMessage, TextfieldTextarea } from "~/styles/components/Textfield"

export interface ITextarea {
  value: string;
  placeholder: string;
  labelPosition?: "vertical" | "horizontal";
  label?: string;
  resize?: "none" | "both" | "horizontal" | "vertical";
	isValid?: boolean;
	validMessage?: string;
	disabled?: boolean;
	readonly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CmTextarea({ value, placeholder, labelPosition = "vertical", label, resize = "vertical", disabled = false, readonly = false,  isValid = false,validMessage, onChange }: ITextarea) {
	const [inputValue, setInputValue] = useState<string>(value)

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value)
		onChange(e)
	}

	return (
		<TextfieldWrapper $labelPosition={labelPosition}>
			{label && <TextfieldLabel $labelPosition={labelPosition}>{label}</TextfieldLabel>}
			<div>
				<TextfieldTextarea value={inputValue} placeholder={placeholder} disabled={disabled} readOnly={readonly} onChange={handleChange} $isValid={isValid} $resize={resize}/>
				{isValid && <TextfieldMessage>{validMessage}</TextfieldMessage>}
			</div>
		</TextfieldWrapper>
	)
}

export default CmTextarea