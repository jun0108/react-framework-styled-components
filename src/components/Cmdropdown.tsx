import { useEffect, useRef, useState } from "react"
import { DropdownWrapper, OptionItem, OptionsList, DropdownInput, DropdownPlaceholder, DropdownArrow } from "~/styles/components/Dropdown"
import { TextfieldLabel, TextfieldMessage } from "~/styles/components/Textfield"
import { CSSTransition } from "react-transition-group"
import Icon from "./Icon"

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  mode?: "single" | "multiple";
  labelPosition?: "vertical" | "horizontal";
  label?: string;
  isValid?: boolean;
	validMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  onChange?: (selected: string | string[]) => void;
}

const CmDropdown = ({
	options,
	mode = "single",
	labelPosition = "vertical",
	label,
	isValid = false, 
	validMessage,
	disabled = false,
	readonly = false,
	placeholder = "Select...",
	onChange,
}: DropdownProps) => {
	const [selected, setSelected] = useState<string | string[]>(
		mode === "multiple" ? [] : ""
	)
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const optionsListRef = useRef<HTMLDivElement>(null)
	// 외부 클릭 감지
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	const toggleDropdown = () => {
		if (!disabled && !readonly) setIsOpen((prev) => !prev)
	}

	const handleSelect = (value: string) => {
		if (readonly) return

		if (mode === "multiple") {
			const selectedArray = selected as string[]
			const newSelected = selectedArray.includes(value)
				? selectedArray.filter((v) => v !== value)
				: [...selectedArray, value]
			setSelected(newSelected)
			onChange?.(newSelected)
		} else {
			setSelected(value)
			onChange?.(value)
			setIsOpen(false)
		}
	}

	return (
		<DropdownWrapper ref={dropdownRef}  $labelPosition={labelPosition}>
			{label && <TextfieldLabel $labelPosition={labelPosition}>{label}</TextfieldLabel>}
      
			<DropdownInput $readonly={readonly} $disabled={disabled} $isValid={isValid} onClick={toggleDropdown}>
				{Array.isArray(selected) && selected.length === 0
					? placeholder
					: Array.isArray(selected)
						? selected.join(", ")
						:  (
							selected || <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>
						)}
				<DropdownArrow $isOpen={isOpen}>
					<Icon name="arrow-d__full--6b7" width="24" height="24" alt="arrow"/>
				</DropdownArrow>
			</DropdownInput>
			{isValid && <TextfieldMessage>{validMessage}</TextfieldMessage>}
      
			<CSSTransition 
				in={isOpen} 
				timeout={200} 
				classNames="dropdown-slide" 
				unmountOnExit
				nodeRef={optionsListRef} 
			>
				<OptionsList ref={optionsListRef}>
					{options.map((option) => (
						<OptionItem
							key={option.value}
							selected={Array.isArray(selected) ? selected.includes(option.value) : selected === option.value}
							onClick={() => handleSelect(option.value)}
						>
							{option.label}
						</OptionItem>
					))}
				</OptionsList>
			</CSSTransition>
		</DropdownWrapper>
	)
}

export default CmDropdown