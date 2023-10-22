const addTask = document.querySelector('.add__task')
const inputTaskText = document.querySelector('.input__task__value')
const taskItems = document.querySelector('.task__items')
const taskButton = document.querySelector('.task__btn')

addTask.addEventListener('click', (event) => {
	event.preventDefault()
	taskItems.innerHTML += `
					<div class="task__box">
						<input
							class="input__task task__text__value"
							type="text"
							placeholder="I like js and programming"
							value="${inputTaskText.value}" readonly
						/>
						<button class="task__btn  task__edit task__icon">
							
						</button>
						<button class="task__btn task__remove task__icon">
							
						</button>
					</div>`
	inputTaskText.value = ''
	const textTasks = document.querySelectorAll('.task__text__value')
	const editTask = document.querySelectorAll('.task__edit')

	editTask.forEach((el, i) => {
		el.addEventListener('click', () => {
			const textTask = textTasks[i]

			if (el.classList.contains('task__edit')) {
				el.classList.replace('task__edit', 'task__ok')
				textTask.removeAttribute('readonly')
				textTask.style.outline = '1px solid #626b7c'
			} else {
				el.classList.replace('task__ok', 'task__edit')
				textTask.setAttribute('readonly', 'readonly')
				textTask.style.outline = 'none'
			}
		})
	})
	const removeTasks = document.querySelectorAll('.task__remove')
	const boxTasks = document.querySelectorAll('.task__box')
	removeTasks.forEach((elem, i) => {
		elem.addEventListener('click', () => {
			const boxTask = boxTasks[i].remove()
		})
	})
})
