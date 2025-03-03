import { createRoot } from "react-dom/client"
import { useState, useEffect } from "react"
import { ToastContainer, ToastMessage } from "~/styles/components/Popups"

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const Toast = ({ message, type = "info", duration = 3000, onClose }: ToastProps) => {
	useEffect(() => {
		const timer = setTimeout(onClose, duration)
		return () => clearTimeout(timer)
	}, [duration, onClose])

	return (
		<ToastMessage $type={type}>
			{message}
			<button onClick={onClose} style={{ marginLeft: "10px", background: "transparent", border: "none", color: "white", cursor: "pointer" }}>
				✖
			</button>
		</ToastMessage>
	)
}

const ToastManager = () => {
	const [toasts, setToasts] = useState<{ id: number; message: string; type: "success" | "error" | "info"; duration: number }[]>([])

	const addToast = (message: string, type: "success" | "error" | "info", duration: number) => {
		const id = Date.now()
		setToasts((prev) => [...prev, { id, message, type, duration }])

		setTimeout(() => {
			removeToast(id)
		}, duration)
	}

	const removeToast = (id: number) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id))
	}

	useEffect(() => {
		CmToast.setToast(addToast)
	}, [])

	return (
		<ToastContainer>
			{toasts.map((toast) => (
				<Toast key={toast.id} message={toast.message} type={toast.type} duration={toast.duration} onClose={() => removeToast(toast.id)} />
			))}
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