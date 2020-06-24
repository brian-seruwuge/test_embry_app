import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

const AddForm = (props) => {
        const initialFormState = { products: "", number: "", size: "" }
        const [formState, setformState] = useState(initialFormState)

        const handleChange = (event) => {
            const { name, value } = event.target
            setformState({...formState, [name]: value })

        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formState)
                // if (formState.id && formState.product && formState.number && formState.size)
                // props.addItem(formState)
                // setformState(initialFormState)
            return axios.post('http://localhost:5002/embry', formState)
                .then(response => { console.log(response) })
                .catch(error => { console.log(error, error.response) })
        }
        return ( < div >

            <
            h2 > Add Product < /h2>  <
            Form onSubmit = { handleSubmit } >
            <
            Form.Field width = { 12 } >
            <
            label > Products < /label>  <
            input placeholder = 'Product'
            name = "products"
            value = { formState.products }
            onChange = { handleChange }
            /> <
            /Form.Field>  <
            Form.Field width = { 12 } >
            <
            label > Number < /label> <input placeholder = 'Number' name = "number" value = { formState.number } onChange = { handleChange }/ >
            <
            /Form.Field>  <
            Form.Field width = { 12 } >
            <
            label > Size < /label> <input placeholder = 'size' name = "size"value = { formState.size } onChange = { handleChange }/ >
            <
            /Form.Field>  <
            Button type = 'submit'
            color = "blue" > Submit < /Button>   <
            /Form> <
            /div>)
        }
        export default AddForm