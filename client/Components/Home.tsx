import React, { useEffect, useState } from 'react'
import Container from './Container.tsx'
import { Link } from 'react-router'
import axios from 'axios'
import { server } from '../api/index.tsx'
import Swal from 'sweetalert2'

interface TodoProps {
  id: number
  name: string
  age: number
  message: string | null
}

const Home = () => {
  const [todolist, setTodolist] = useState<TodoProps[]>([])

  const fetchTodo = async () => {
    const { data } = await axios.get(server.API_GET_TODO)
    setTodolist(data)
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  const removeTodo = async (id: number) => {
    try {
      await axios.delete(server.API_REMOVE_TODO.replace("id", String(id!)))
    } catch (err) {
      console.log("error cannot remove todo:", err)
    }
  }

  return (
    <>
      <Container className='my-10'>
        <div className='flex items-center text-center mb-4'>
          <h1 className='w-full text-3xl font-bold text-blue-500'>Todolist-app</h1>
        </div>
        <div className="relative overflow-x-auto rounded-2xl">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {todolist.length === 0 ? null : (
                todolist.map((val, idx) => (
                  <tr key={idx} className="bg-white border-b border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {val.id}
                    </th>
                    <td className="px-6 py-4">
                      {val.name}
                    </td>
                    <td className="px-6 py-4">
                      {val.age}
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      <h1 className='mr-4'>{val.message}</h1>
                      <Link to={`update/${val.id}`} className='px-6 py-1 mr-4 rounded-md bg-green-500 text-white'>Edit</Link>
                      <button onClick={(e) => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                          if (result.isConfirmed) {
                            removeTodo(val.id)
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your have deleted todo.",
                              icon: "success"
                            }).then(() => {
                              fetchTodo()
                            })
                          }
                        });
                      }} className='px-6 py-1 rounded-md bg-red-500 text-white'>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  )
}

export default Home
