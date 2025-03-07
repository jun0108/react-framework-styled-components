import { createRoot } from "react-dom/client"
import { useState, useEffect, useRef } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { ToastContainer, ToastMessage } from "~/styles/components/Popups"

interface ToastData {
  id: number
  message: string
  type: "success" | "error" | "info"
  duration: number
  visible: boolean 
}

const Toast = ({ message, type, duration = 3000, visible, onClose }: Omit<ToastData, "id"> & { onClose: () => void }) => {
	const nodeRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const timer = setTimeout(onClose, Math.max(duration - 300, 0)) 
		return () => clearTimeout(timer)
	}, [duration, onClose])

	return (
		<CSSTransition
			nodeRef={nodeRef}
			timeout={300}
			classNames="toast-slide"
			unmountOnExit
			in={visible}
			onExited={onClose}
		>
			<ToastMessage ref={nodeRef} $type={type}>
				{message}
				<button onClick={onClose}>✖</button>
			</ToastMessage>
		</CSSTransition>
	)
}

const ToastManager = () => {
	const [toasts, setToasts] = useState<ToastData[]>([])

	const addToast = (message: string, type: "success" | "error" | "info", duration: number) => {
		const id = Date.now()
		setToasts((prev) => [...prev, { id, message, type, duration, visible: true }]) 

		setTimeout(() => removeToast(id), duration)
	}

	const removeToast = (id: number) => {
		setToasts((prev) =>
			prev.map((toast) => (toast.id === id ? { ...toast, visible: false } : toast))
		)
		setTimeout(() => {
			setToasts((prev) => prev.filter((toast) => toast.id !== id))
		}, 300)
	}

	useEffect(() => {
		CmToast.setToast(addToast)
	}, [])

	return (
		<ToastContainer>
			<TransitionGroup>
				{toasts.map(({ id, message, type, duration, visible }) => (
					<Toast key={id} message={message} type={type} duration={duration} visible={visible} onClose={() => removeToast(id)} />
				))}
			</TransitionGroup>
		</ToastContainer>
	)
}

const toastRoot = document.createElement("div")
document.body.appendChild(toastRoot)
const root = createRoot(toastRoot)
root.render(<ToastManager />)

const CmToast = {
	show: (message: string, type: "success" | "error" | "info" = "info", duration: number = 3000) => {
		CmToast._addToast?.(message, type, duration)
	},
	_addToast: null as ((message: string, type: "success" | "error" | "info", duration: number) => void) | null,
	setToast(callback: (message: string, type: "success" | "error" | "info", duration: number) => void) {
		this._addToast = callback
	},
}

export default CmToast