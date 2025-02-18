import { useState } from "react";
import { TextfieldLabel, TextfieldWrapper, TextfieldTextarea } from "~/styles/components/Textfield";

export interface ITextarea {
  value: string;
  placeholder: string;
  labelPosition?: "vertical" | "horizontal";
  label?: string;
	isValid?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CmInput({ value, placeholder, labelPosition = "horizontal", label, isValid = false, onChange }: ITextarea) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <TextfieldWrapper $labelPosition={labelPosition}>
      {label && <TextfieldLabel $labelPosition={labelPosition}>{label}</TextfieldLabel>}
      <TextfieldTextarea value={inputValue} placeholder={placeholder} onChange={handleChange} $isValid={isValid}/>
    </TextfieldWrapper>
  );
}

export default CmInput;