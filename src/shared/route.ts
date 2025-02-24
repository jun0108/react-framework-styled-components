import { createBrowserRouter } from "react-router"

import Todo from '~/pages/todo/TodoList'
import Example from'~/pages/examples/index'
import Button from'~/pages/examples/Button'
import Textfield from'~/pages/examples/textfield'
import Popup from'~/pages/examples/Popup'

const router = createBrowserRouter([
	{
		path: '/todo',
		Component: Todo
	},
	{
		path: '/examples',
		Component: Example
	},
	{
		path: '/examples/button',
		Component: Button
	},
	{
		path: '/examples/textfield',
		Component: Textfield
	},
	{
		path: '/examples/Popup',
		Component: Popup
	},
])

export default router