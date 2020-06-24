import React, { useState, useEffect } from 'react';
import './App.css';
import { Table, Button, Grid } from 'semantic-ui-react'
import AddForm from './components/addForm';
import EditForm from './components/editForm'
import axios from 'axios';


const App = () => {
    const initialItems = []
    const [items, setItems] = useState(initialItems)
    const [editing, setEditing] = useState(false) // set state for edit mode
    const initialFormState = { products: "", number: "", size: "", id: "" }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    // add user
    // const addItem = (item) => {
    // item.id = items.length+1
    // setItems([...items, item])
    // setItems(prevState => [...prevState, item])

    // }
    // delete items
    const deleteItem = (id) => {
        console.log(id)
        setEditing(false)
        return axios.delete(`http://localhost:5002/embry/${id}`)
            .then(response => { console.log(response.data) })
            .catch(error => console.log(error, error.response))
    }

    // set edit mode
    const editRow = (item) => {
        setEditing(true) // set edit mode
        setCurrentUser({ products: item.products, number: item.number, size: item.size, id: item.id }) // set current user

    }

    //get api
    useEffect(() => {
        axios.get('http://localhost:5002')
            .then(response => setItems(response.data)) //data object is part of the response and therefore can be extracted with response.data
            .catch(error => console.log(error, error.response))
    }, [items])



    return ( <
            div >
            <
            Grid >
            <
            Grid.Column width = { 6 } >
            <
            h1 > Embry Hardware < /h1>  {
            editing ?
            ( < EditForm editing = { editing }
                setEditing = { setEditing }
                currentUser = { currentUser }
                items = { items }
                />) : ( <AddForm 
                // addItem = { addItem }
                /
                > )
        } < /Grid.Column>   <
        Grid.Column width = { 10 }
    verticalAlign = "middle" >
        <
        h2 > View Products < /h2>  <
        Table celled selectable >
        <
        Table.Header >
        <
        Table.Row >
        <
        Table.HeaderCell > ID < /Table.HeaderCell>  <
        Table.HeaderCell > Product < /Table.HeaderCell>   <
        Table.HeaderCell > Number < /Table.HeaderCell>  <
        Table.HeaderCell > Size < /Table.HeaderCell>   <
        Table.HeaderCell > Actions < /Table.HeaderCell>   <
        /Table.Row>   <
        /Table.Header>   <
        Table.Body > {
            items.map((item) => ( < Table.Row key = { item.id } >
                <
                Table.Cell > { item.id } < /Table.Cell>   <
                Table.Cell > { item.products } < /Table.Cell>   <
                Table.Cell > { item.number } < /Table.Cell>   <
                Table.Cell > { item.size } < /Table.Cell>  <
                Table.Cell >
                <
                Button type = 'submit'
                onClick = {
                    () => editRow(item) }
                color = "green" > Edit < /Button>   <
                Button type = 'submit'
                onClick = {
                    () => deleteItem(item.id) }
                color = "red" > Delete < /Button>   <
                /Table.Cell> </Table.Row >
            ))
        } < /Table.Body>   <
        /Table>    <
        /Grid.Column>     <
        /Grid>    <
        /div>
);
}

export default App;