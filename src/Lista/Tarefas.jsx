import React, { useEffect, useState } from 'react';
import { ListStyled } from './styled';
import { Input } from '@chakra-ui/react'


export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    useEffect(() => {
        // Carregar os dados do localStorage quando o componente for montado
        const tasksData = localStorage.getItem('tasks')
        

        if (tasksData) {
            setTasks(JSON.parse(tasksData))
        }else{
            setTasks([])
        }

    }, [])

    useEffect(() => {
        // Salvar os dados no localStorage sempre que as listas diarias ou semanais forem atualizadas
        setTimeout(() => {
            localStorage.setItem('tasks', JSON.stringify(tasks))
            
        }, 200);

    }, [tasks])

    return (
        <ListStyled>
            <h1>Lista de Tarefas:</h1>

            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />
            <button onClick={addTask}>Adicionar</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </ListStyled>
    );
}
