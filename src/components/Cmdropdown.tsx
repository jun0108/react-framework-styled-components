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
	style?: React.CSSProperties;
  options: Option[];
  mode?: "single" | "multiple";
  value: string | string[]; // ✅ 부모에서 전달받는 선택된 값
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
	style,
	options,
	mode = "single",
	value, 
	labelPosition = "vertical",
	label,
	isValid = false,
	validMessage,
	disabled = false,
	readonly = false,
	placeholder = "선택해주세요.",
	onChange,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const optionsListRef = useRef<HTMLDivElement>(null)

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

	const handleSelect = (selectedValue: string) => {
		if (readonly) return

		let newSelected: string | string[]

		if (mode === "multiple") {
			const selectedArray = value as string[]
			newSelected = selectedArray.includes(selectedValue)
				? selectedArray.filter((v) => v !== selectedValue)
				: [...selectedArray, selectedValue]
		} else {
			newSelected = selectedValue
			setIsOpen(false)
		}

		onChange?.(newSelected) 
	}

	return (
		<DropdownWrapper ref={dropdownRef} $labelPosition={labelPosition}>
			{label && <TextfieldLabel $labelPosition={labelPosition}>{label}</TextfieldLabel>}
			<div>
				<DropdownInput style={style} $readonly={readonly} $disabled={disabled} $isValid={isValid} onClick={toggleDropdown}>
					{Array.isArray(value) && value.length === 0
						? <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>
						: Array.isArray(value)
							? value.join(", ")
							: (value || <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>)
					}
					<DropdownArrow $isOpen={isOpen} $disabled={disabled || readonly}>
						<Icon name="arrow-d__full--6b7" width="24" height="24" alt="arrow"/>
					</DropdownArrow>
				</DropdownInput>

				<CSSTransition in={isOpen} timeout={200} classNames="dropdown-slide" unmountOnExit nodeRef={optionsListRef}>
					<OptionsList ref={optionsListRef}>
						{options.map((option) => (
							<OptionItem
								key={option.value}
								selected={Array.isArray(value) ? value.includes(option.value) : value === option.value}
								onClick={() => handleSelect(option.value)}
							>
								{option.label}
							</OptionItem>
						))}
					</OptionsList>
				</CSSTransition>
			</div>
			{isValid && <TextfieldMessage>{validMessage}</TextfieldMessage>}
		</DropdownWrapper>
	)
}

export default CmDropdown