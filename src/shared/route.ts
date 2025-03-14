import { createBrowserRouter } from "react-router"

import Home from "~/pages/home"
import NotFound from "~/pages/error/404"
import Todo from '~/pages/todo/TodoList'
import Example from'~/pages/examples/index'
import Button from'~/pages/examples/Button'
import Textfield from'~/pages/examples/Textfield'
import Popup from'~/pages/examples/Popup'
import Dropdown from'~/pages/examples/Dropdown'
import Tooltip from'~/pages/examples/Tooltip'

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
		Component: Button
	},
	{
		path: '/examples/textfield',
		Component: Textfield
	},
	{
		path: '/examples/popup',
		Component: Popup
	},
	{
		path: '/examples/dropdown',
		Component: Dropdown
	},
	{
		path: '/examples/tooltip',
		Component: Tooltip
	},
])

export default router