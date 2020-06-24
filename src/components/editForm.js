import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

const EditForm = (props) => {
        const [EditFormState, setEditFormState] = useState(props.currentUser)

        const handleChange = (event) => {
            const { name, value } = event.target
            setEditFormState({...EditFormState, [name]: value })

        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(EditFormState)

        }

        //    update user
        const updateItem = (id) => {
            console.log(id)
            console.log(props)

            return axios.put('http://localhost:5002/embry/' + id, EditFormState)
                .then(response => { console.log(response.data) })
                .catch(error => { console.log(error, error.response) })
        }

        useEffect(() => {
            setEditFormState(props.currentUser)
        }, [props.currentUser])

        return ( < div >

            <
            h2 > Edit Product < /h2>  <
            Form onSubmit = { handleSubmit } >
            <
            Form.Field width = { 12 } >
            <
            label > Product < /label>  <
            input placeholder = 'products'
            name = "products"
            value = { EditFormState.products }
            onChange = { handleChange }
            /> <
            /Form.Field> <Form.Field width = { 12 } > <
            label > Number < /label> <input placeholder = 'Number' name = "number" value = { EditFormState.number } onChange = { handleChange }/ >
            <
            /Form.Field> <Form.Field width = { 12 } > <
            label > Size < /label> <input placeholder = 'size' name = "size" value = {EditFormState.size} onChange = { handleChange }/ >
            <
            /Form.Field> <
            Button type = 'submit'
            color = "blue"
            onClick = {
                () => { updateItem(props.currentUser.id) } } > update item < /Button> <
            Button type = 'submit'
            onClick = {
                () => props.setEditing(false) }
            color = "black" > cancel < /Button> <
            /Form> <
            /div>) 
        }
        export default EditForm