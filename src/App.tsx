import {
	RouterProvider,
} from "react-router"
import router from '~/shared/route'
import { GlobalStyles } from "./styles/main.ts"
import { Layout, LayoutContent } from "./styles/layout/Wrapper.ts"
import Header from'./layouts/Header'

function App() {

	return (
		<>
			<GlobalStyles />
			<Layout>
				<Header/>
				<LayoutContent>
					<RouterProvider router={router} />
				</LayoutContent>
			</Layout>
		</>
	)
}

export default App
