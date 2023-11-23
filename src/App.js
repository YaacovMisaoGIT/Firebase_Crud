import { useState, useEffect} from 'react';
import './App.css';
import { db } from './firebase-config'
import {
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  doc,
  deleteDoc
} from "firebase/firestore"

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState()
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection (db, "users")

  // #Create/Add 2
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }

  // #Update 3   *age: previous age
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc( userDoc, newFields)
  }

  //#Delete User 4 
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  // #Read 1
  useEffect(() =>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));      
    }
    getUsers()
  }, [])


  return (
    <div className="App"> 
      <input placeholder='Name...' onChange={(event) => {
        setNewName(event.target.value)
      }}/>
      <input type='number' placeholder='Age...' onChange={(event) => {
        setNewAge(event.target.value)
      }}/>
      <button onClick={createUser}> Create User </button>
      {users.map((user) => {
        return <div> 
                   {"   "}
                  <h1> {user.name} </h1>
                  <h1> {user.age} </h1>
                  <button
                    onClick={ () => {
                      updateUser(user.id, user.age)
                    }}
                  > Increase Age </button>
                  <button onClick= { () => {deleteUser(user.id)}}> Delete User</button>
                </div>    
      })}
    </div>

  )
    
}

export default App;
