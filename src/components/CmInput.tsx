import { useState } from "react";
import { TextfieldLabel, TextfieldWrapper, TextfieldInput } from "~/styles/components/Textfield";

export interface IInput {
  type?: "text" | "password" | "number";
  value: string;
  placeholder: string;
  labelPosition?: "vertical" | "horizontal";
  label?: string;
	isValid?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CmInput({ type = "text", value, placeholder, labelPosition = "horizontal", label, isValid = false, onChange }: IInput) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <TextfieldWrapper $labelPosition={labelPosition}>
      {label && <TextfieldLabel $labelPosition={labelPosition}>{label}</TextfieldLabel>}
      <TextfieldInput type={type} value={inputValue} placeholder={placeholder} onChange={handleChange} $isValid={isValid}/>
    </TextfieldWrapper>
  );
}

export default CmInput;