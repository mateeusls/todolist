import { PlusCircle, ClipboardList, Trash2 } from 'lucide-react'

import todoLogo from './assets/Logo.svg'
import allTasks from '../tasks.json'
import { FormEvent, useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState(allTasks.data)

  function handleCheckedTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked,
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  function addNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const title = formData.get('title') as string

    const mathRandom = Math.floor(Math.random() * 1000)

    const newTask = {
      id: mathRandom,
      title,
      checked: false,
    }

    event.currentTarget.reset()
    setTasks([...tasks, newTask])
  }

  function removeTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <>
      <header className="h-52 bg-gray-700 flex justify-center items-center">
        <img src={todoLogo} alt="" />
      </header>

      <main className="flex justify-center -mt-6">
        <div className="w-container space-y-16">
          <form onSubmit={addNewTask}>
            <div className="flex gap-2">
              <input
                type="text"
                name="title"
                placeholder="Adicione uma nova tarefa"
                className="flex-1 px-4 rounded-md bg-gray-500 placeholder:text-gray-300 text-gray-100 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-blue-dark hover:bg-sky-400 duration-200 transition-colors flex p-3 rounded-md text-white gap-2">
                Criar
                <PlusCircle />
              </button>
            </div>
          </form>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="font-bold text-sky-300">Tarefas criadas</span>
                <p className="bg-gray-400 p-3 rounded-full h-5 w-8 flex items-center justify-center font-bold text-gray-200">
                  {tasks.length}
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <span className="font-bold text-indigo-400">Concluídas</span>
                <div className="bg-gray-400 p-1 rounded-full px-3 flex items-center justify-center font-bold text-gray-200">
                  {tasks.filter((task) => task.checked).length} de{' '}
                  {tasks.length}
                </div>
              </div>
            </div>

            {tasks.length === 0 ? (
              <div className="w-full border-t border-gray-300 rounded-t-lg flex flex-col justify-center items-center p-8 gap-3">
                <ClipboardList size={56} className="text-gray-400" />
                <div className="text-gray-300 flex flex-col items-center gap-0">
                  <span className="font-semibold text-lg">
                    Você ainda não tem tarefas cadastradas
                  </span>
                  Crie tarefas e organize seus itens a fazer
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {tasks.map((task) => {
                  return (
                    <div
                      className="flex items-start justify-between gap-4 p-3 bg-gray-500 rounded-md"
                      key={task.id}
                    >
                      <input
                        type="checkbox"
                        className="rounded-full bg-transparent border-2 border-sky-300 mt-1 outline-none focus:ring-offset-0 hover:bg-blue-dark focus:ring-0 p-2 checked:bg-indigo-500 checked:hover:bg-indigo-400 duration-200 transition-colors"
                        checked={task.checked}
                        onChange={() => handleCheckedTask(task.id)}
                      />
                      <p
                        data-checked={task.checked}
                        className="flex-1 text-gray-100 data-[checked=true]:line-through"
                      >
                        {task.title}
                      </p>
                      <button onClick={() => removeTask(task.id)}>
                        <Trash2 className="text-gray-300 hover:text-red-400 hover:bg-gray-400" />
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
