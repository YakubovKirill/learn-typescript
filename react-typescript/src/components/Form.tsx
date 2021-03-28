import React, { useState, useRef } from 'react'

interface FormProps {
    onAdd(title: string): void
}

export const Form: React.FC<FormProps> = (props) => {
    /*const [title, setTitle] = useState<string>('')

    const changeHand = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }*/

    const refer = useRef<HTMLInputElement>(null)

    const keyPressHand = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(refer.current!.value)
            refer.current!.value = ''
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                //onChange={changeHand}
                onKeyPress={keyPressHand}
                ref={refer}
                //value={title}
                type="text"
                id='title'
                placeholder='Enter todo name'
            />
            <label htmlFor="title" className='active'>Enter todo name</label>
        </div>
    )
}