import router from "~/shared/route" 
import { PageTitle, PageSubTitle } from "~/styles/layout/Wrapper"

function Example() {
	const menuList = [
		{ path: "button", title: 'buttons' },
		{ path: "textfield", title: 'textfield' },
		{ path: "popup", title: 'popups' },
		{ path: "dropdown", title: 'dropdown' },
	]
	return (
		<div>
			<PageTitle>UI EXAMPLE</PageTitle>
			<PageSubTitle>UI 컴포넌트 확인이 가능합니다.</PageSubTitle>
			<ul >
				{menuList.map(({ path, title }) => (
					<li style={{width: '200px',marginTop:'8px'}} className="chip__full--primary-md" key={path} onClick={() => router.navigate(path)}>
						<span>{title}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Example
