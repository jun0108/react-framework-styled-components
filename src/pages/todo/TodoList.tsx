import { useState } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import CmInput from '~/components/CmInput'
import CmToast from '~/components/CmToast'

interface Todo {
  id: number;
  text: string;
  selected: boolean;
}

const TodoList = styled.div`
  width: 500px;
`
const TodoListHeader = styled.div`
	display: flex;
	align-items: center;;
	margin-bottom: 10px;
	input {
		margin-right: 8px;
	}
`
const TodoListContent = styled.ul`
  ${space({y:'8px'})};
`

const Todo = () => {
	const [todoList, setTodoList] = useState<Todo[]>([])
	const [inputValue, setInputValue] = useState('')
  
	const handleAddTodo = () => {
		const newTodo: Todo = {
			id: Date.now(),
			text: inputValue,
			selected: false
		}
	
		if (inputValue.trim() === "") return
	
		const isDuplicate = todoList.some(todo => todo.text === inputValue)
		if (isDuplicate) {
			CmToast.show("이미 있는 할일 입니다.", 'error')
			return
		}

		setTodoList([...todoList, newTodo])
		setInputValue("")
	}
	
	const toggleChecked = (id: number) => {
		setTodoList(todoList.map(todo =>
			todo.id === id ? { ...todo, selected: !todo.selected } : todo
		))
	}

	const handleDeleteTodo = (id: number) => {
		setTodoList(todoList.filter((todo) => todo.id !== id))
	}

	return (
		<TodoList>
			<TodoListHeader>
				<CmInput type='text' value={inputValue} placeholder='할일을 입력해주세요.' onChange={(e) => setInputValue(e.target.value)} />
				<button className='btn__full--primary-md' onClick={handleAddTodo}>
					Add
				</button>
			</TodoListHeader>
			<TodoListContent>
				{todoList.length ? (
					todoList.map((todo) => (
						<TodoItem key={todo.id} id={todo.id} selected={todo.selected} text={todo.text} isSelected={toggleChecked} onDelete={handleDeleteTodo} />
					))
				) : (
					<li>등록된 할일이 없습니다.</li>
				)
				}
			</TodoListContent>
		</TodoList>
	)
}

export default Todo