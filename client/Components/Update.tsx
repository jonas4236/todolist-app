import React, { FormEvent, useEffect, useState } from "react"
import Container from "./Container"
import { useParams } from "react-router"
import axios from "axios"
import { server } from "../api"
import Swal from "sweetalert2"

const Update = () => {
  const { id } = useParams()
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(1)
  const [message, setMessage] = useState<string>('')
  const [userId, setUserId] = useState<number>(0)

  const fetchSingleTodo = async () => {
    const { data } = await axios.get(server.API_GET_SINGLE_TODO.replace('id', id!))

    if (data) {
      setUserId(data.id)
      setName(data.name)
      setAge(data.age)
      setMessage(data.message)
    }
  }

  const updateTodo = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      await axios.put(server.API_PUT_TODO, {
        id: userId,
        name: name,
        age: age,
        message: message
      }).then(() => {
        setName("")
        setAge(1)
        setMessage("")
        Swal.fire("Successfully!", "your have updated todo", "success").then(() => {
          window.location.href = '/'
        })
      })
    } catch (err) {
      Swal.fire("Error!", `your have error to updated todo ${err}`, "error")
      console.warn("Error cannot update todo", err)
    }
  }

  useEffect(() => {
    fetchSingleTodo()
  }, [])

  return (
    <>
      <Container>
        <div className="flex items-center content-center text-center">
          <h1 className="w-full text-blue-500 font-semibold text-2xl">Update Page</h1>
        </div>
        <div className="max-w-sm mx-auto bg-blue-500 p-8 my-12 rounded-lg">
          <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="input your name" required />
          </div>
          <div className="mb-5">
            <label htmlFor="Age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
            <input type="number" id="Age" min={1} placeholder="input your age" value={age} onChange={(e) => setAge(parseInt(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea rows={8} cols={50} value={message} onChange={(e) => setMessage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none" />
          </div>
          <button onClick={(e) => {
            if (!name || age <= 0 || !message) {
              return;
            } else {
              updateTodo(e)
            }
          }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </Container>
    </>
  )
}

export default Update
