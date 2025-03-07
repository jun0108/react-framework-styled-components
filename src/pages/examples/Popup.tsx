import styled from "styled-components"
import CmMessage from '~/components/CmMessage'
import CmModal from '~/components/CmModal'
import CmToast from '~/components/CmToast'

const ExampleItem = styled.div`
  ${space({x:'8px'})};
  display: flex;
  align-items: center;
`

function Popups() {
	const [modalOpen, setModalOpen] = useState(false)

	const openConfirm = async () => {
		const result = await CmMessage.open({
			popupTitle: "정말 삭제하시겠습니까?",
			content: "되돌릴 수 없습니다.",
			confirmText: "삭제",
			cancelText: "취소",
		})
	
		if (result) {
			console.log("✅ 삭제")
		} else {
			console.log("❌ 취소")
		}
	}
	async function openAlert() {
		const isAlert = await CmMessage.open({
			type: 'alert',
			popupTitle: "삭제 확인",
			content: "삭제 되었습니다.",
			confirmText: "닫기",
		})
		if (isAlert) {
			console.log("삭제 확인")
		} 
	}
	const openToast = useCallback((type: "success" | "error" | "info") => {
		CmToast.show("Toast Message", type, 3000)
	}, [])

	return (
		<div>
			<PageTitle>Popups</PageTitle>
			<div className="p-3 mb-5 space-y-5">
				<div>
					<PageSubTitle>Modal</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__full--primary-sm"
							onClick={() => setModalOpen(true)}>
							open
						</button>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Confirm</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__full--primary-sm"
							onClick={openConfirm}>
							open
						</button>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Alert</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__full--primary-sm"
							onClick={openAlert}>
							open
						</button>
					</ExampleItem>
				</div>
				<div>
					<PageSubTitle>Toast</PageSubTitle>
					<ExampleItem>
						<button type="button" className="btn__full--primary-sm" 
							onClick={() => openToast("success")}>
							Success
						</button>
						<button type="button" className="btn__full--gray-sm" 
							onClick={() => openToast("error")}>
							Error
						</button>
						<button type="button" className="btn__full--secondary-sm" 
							onClick={() => openToast("info")}>
							Info
						</button>
					</ExampleItem>
				</div>
			</div>
			<CmModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)} 
				popupTitle="Modal Title"
				popupFooter={
					<>
						<button type="button" className="btn__line--gray-sm"
							onClick={() => setModalOpen(false)}>
							닫기
						</button>
						<button type="button" className="btn__full--primary-sm">
							확인
						</button>
					</>
				}
			>
				<p>Modal Contents</p>
			</CmModal>
		</div>
	)
}

export default Popups
