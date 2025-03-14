import { useState, useRef, useEffect } from "react"
import { TooltipWrapper, TooltipBox } from "~/styles/components/Tooltip"
import { CSSTransition } from "react-transition-group"

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  trigger?: "hover" | "click";
  children: React.ReactNode;
}

const CmTooltip = ({ text, position = "top", trigger = "hover", children }: TooltipProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const tooltipRef = useRef<HTMLDivElement>(null)
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (trigger !== "click") return
    
		const handleClickOutside = (event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [trigger])

	const handleMouseEnter = () => trigger === "hover" && setIsOpen(true)
	const handleMouseLeave = () => trigger === "hover" && setIsOpen(false)

	const handleClick = () => trigger === "click" && setIsOpen((prev) => !prev)

	return (
		<TooltipWrapper
			ref={wrapperRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			{children}
			<CSSTransition
				in={isOpen}
				timeout={200}
				classNames="tooltip-fade"
				unmountOnExit
				nodeRef={tooltipRef}
			>
				<TooltipBox ref={tooltipRef} $position={position}>
					{text}
				</TooltipBox>
			</CSSTransition>
		</TooltipWrapper>
	)
}

export default CmTooltip