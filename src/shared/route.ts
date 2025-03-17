import { createBrowserRouter } from "react-router"

import Home from "~/pages/home"
import NotFound from "~/pages/error/404"
import Todo from '~/pages/todo/TodoList'
import Example from'~/pages/examples/index'
import ExampleButton from'~/pages/examples/Button'
import ExampleTextfield from'~/pages/examples/Textfield'
import ExamplePopup from'~/pages/examples/Popup'
import ExampleDropdown from'~/pages/examples/Dropdown'
import ExampleTooltip from'~/pages/examples/Tooltip'
import ExampleForm from'~/pages/examples/Form'

const router = createBrowserRouter([
	{
		path: "*", 
		Component: NotFound,
	},
	{
		path: '/',
		Component: Home
	},
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
		Component: ExampleButton
	},
	{
		path: '/examples/textfield',
		Component: ExampleTextfield
	},
	{
		path: '/examples/popup',
		Component: ExamplePopup
	},
	{
		path: '/examples/dropdown',
		Component: ExampleDropdown
	},
	{
		path: '/examples/tooltip',
		Component: ExampleTooltip
	},
	{
		path: '/examples/form',
		Component: ExampleForm
	},
])

export default router