
import styled from "styled-components"
import Icon from "~/components/Icon"
import { CmCheckbox } from "~/styles/components/Selector"
import { space } from "~/styles/helpers/mixins"

interface TodoItemProps {
  id: number;
  text: string;
  selected: boolean;
  isSelected: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItems = styled.li`
  ${space({x:'8px'})};
  &.chip__full--gray-md {
    text-decoration: line-through;
  }
`

const ItemTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 0%;
`

const TodoItem = ({ id, text, selected, onDelete, isSelected }: TodoItemProps) => {
	return (
		<TodoItems className={selected ? "chip__full--gray-md" : "chip__line--primary-md"}>
			<ItemTitle>{text}</ItemTitle>
			<CmCheckbox type='checkbox' checked={selected}
				onChange={() => isSelected(id)}
			/>
			<button type="button" onClick={() => onDelete(id)} >
				<Icon name="close__full--6b7" alt="리스트 삭제" width='24' height='24'/>
			</button>
		</TodoItems>
	)
}

export default TodoItem
