import { createBrowserRouter } from "react-router"

import Home from "~/pages/home"
import Todo from '~/pages/todo/TodoList'
import Example from'~/pages/examples/index'
import Button from'~/pages/examples/Button'
import Textfield from'~/pages/examples/Textfield'
import Popup from'~/pages/examples/Popup'
import NotFound from "~/pages/error/404"

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
		path: '/examples/Popup',
		Component: Popup
	},
])

export default router