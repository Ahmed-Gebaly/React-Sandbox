import { useState } from 'react'
import './App.css'
import Home from './Example-Component'
import { Contact, NewContact } from './Example-Prop1'
import NewHome from './Example-Prop2'
import Cart from './Example-Prop3'
import UsersList from './Example-Prop4'
import Customer from './Example-Prop5'
import Wrapper from './Example-Prop6'
import Data from './Example-Prop7'

function App() {
  const usersData = [
    { name: "Ahmed Gebaly", email: "ahmed.gebaly@example.com" },
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" }
  ];
  return (
    <>
      <Home/>
      <Contact username="Ahmed Gebaly" email="ahmed.gebaly@example.com"></Contact>
      <NewContact name="Ahmed"></NewContact>
      <NewContact name="Gebaly"></NewContact>
      <NewHome name="Ahmed" email="ahmed.gebaly@example.com"/>
      <Cart title="iPhone 13" price={799} stock={true}/>
      <Cart title="iPhone 12" price={699} stock={false}/>
      <UsersList users={usersData }></UsersList>
      <Customer></Customer>
      <Customer username="Ahmed Gebaly"></Customer>
      <Wrapper>
        <h3>This is some content inside the Wrapper component.</h3>
        <p>You can put any content here, and it will be rendered inside the Wrapper.</p>
      </Wrapper>
      <Data>
        {(data)=>(
          <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h1>Data from Render Props: </h1>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>City: {data.city}</p>
          </div>
        )
        }

      </Data>
    </>
  )
}

export default App
