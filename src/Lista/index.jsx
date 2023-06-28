import React, { useEffect, useState } from 'react'
import { BoxList, BuildStyled, DiariaStyled, SemanalStyled } from './styled'
import { Button, Checkbox, CheckboxGroup, Select } from '@chakra-ui/react'
import { TodoList } from './Tarefas'


export const Lista = () => {
    const [diarias, setDiarias] = useState([
        {
            id: 1,
            name: '* Black florest + Hall of warriors',
            completa: false,
        }, {
            id: 2,
            name: '* 00:00 GR',
            completa: false,
        }, {
            id: 3,
            name: '* 12:00 CR',
            completa: false,
        }, {
            id: 4,
            name: '* Whalesong',
            completa: false,
        }, {
            id: 5,
            name: '* Aegis Island',
            completa: false,
        }, {
            id: 6,
            name: '* Ipnya Ridgge',
            completa: false,
        }, {
            id: 7,
            name: 'TItans Maw - ovos de cobra',
            completa: false,
        }, {
            id: 8,
            name: '* Colonizing Auroria',
            completa: false,
        }, {
            id: 9,
            name: '* Defending Auroria',
            completa: false,
        }, {
            id: 10,
            name: '* Blue Salt Request',
            completa: false,
        }, {
            id: 11,
            name: '* World Bosses',
            completa: false,
        }, {
            id: 12,
            name: '* Cargo Delivery',
            completa: false,
        }, {
            id: 13,
            name: '* Local Stew',
            completa: false,
        }, {
            id: 14,
            name: '* Hasla - 14:00 / 21:00',
            completa: false,
        }
    ])
    const [semanais, setSemanais] = useState([
        {
            id: 15,
            name: '* Diamond',
            completa: false,
        }, {
            id: 16,
            name: '* Exeloch',
            completa: false,
        }, {
            id: 17,
            name: '* Reedwind',
            completa: false,
        }, {
            id: 18,
            name: '* Sungold',
            completa: false,
        }, {
            id: 19,
            name: '* Illusion cave',
            completa: false,
        }, {
            id: 20,
            name: '* Hiram cave',
            completa: false,
        }, {
            id: 21,
            name: '* Walterfall Stairs',
            completa: false,
        }, {
            id: 22,
            name: '* Amaitan Meadwos',
            completa: false,
        }
    ])

    useEffect(() => {
        // Carregar os dados do localStorage quando o componente for montado
        const diariasData = localStorage.getItem('diarias')
        const semanaisData = localStorage.getItem('semanais')

        if (diariasData) {
            setDiarias(JSON.parse(diariasData))
        }

        if (semanaisData) {
            setSemanais(JSON.parse(semanaisData))
        }
    }, [])

    useEffect(() => {
        // Salvar os dados no localStorage sempre que as listas diarias ou semanais forem atualizadas
        setTimeout(() => {
            localStorage.setItem('diarias', JSON.stringify(diarias))
            localStorage.setItem('semanais', JSON.stringify(semanais))
        }, 200);

    }, [diarias, semanais])

    const handleCheckboxChange = (estado, taskId) => {
        estado((prevState) =>
            prevState.map((task) => {
                if (task.id === taskId) {
                    return { ...task, completa: !task.completa };
                }
                return task;
            })
        );
    };

    const clearCheckboxChange = (estado, taskId) => {
        estado((prevState) =>
            prevState.map((task) => {
                if (task.id === taskId) {
                    return { ...task, completa: false };
                }
                return task;
            })
        );
    };

    return (
        <div>
            <BoxList>
                {/* <BuildStyled>
                    <Select placeholder='Escolha sua classe'>
                        <option value='option1'>Mage</option>
                        <option value='option2'>Tank</option>
                        <option value='option3'>Healer</option>
                        <option value='option4'>Mele</option>
                        <option value='option5'>Range</option>
                    </Select>
                </BuildStyled> */}
                <TodoList />

                <DiariaStyled>
                    <h1>Diarias:</h1>

                    {diarias.map((diaria) => (
                        <div key={diaria.id}> <Checkbox isChecked={diaria.completa} onChange={() => handleCheckboxChange(setDiarias, diaria.id)}>{diaria.name}</Checkbox></div>
                    ))}
                    <Button bgColor={'black'} color={'red'} onClick={() => { localStorage.removeItem('diarias') 
                diarias.map((diaria)=>{clearCheckboxChange(setDiarias, diaria.id)}) }}>Reset</Button>

                </DiariaStyled>

                <SemanalStyled>
                    <h1>Semanais:</h1>
                    {semanais.map((semanal) => (
                        <p key={semanal.id}> <Checkbox isChecked={semanal.completa} onChange={() => handleCheckboxChange(setSemanais, semanal.id)}>{semanal.name}</Checkbox></p>
                    ))}
                    <Button bgColor={'black'} color={'red'} onClick={() => { localStorage.removeItem('semanais') 
                semanais.map((semanal)=>{clearCheckboxChange(setSemanais, semanal.id)}) }}>Reset</Button>
                </SemanalStyled>

            </BoxList>
        </div>


    )
}
