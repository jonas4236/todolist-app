import { Routes, Route } from 'react-router'
import Layouts from '../Components/Layout/Layouts.tsx'
import Create from '../Components/Create.tsx'
import Update from '../Components/Update.tsx'
import Home from '../Components/Home.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='update/:id' element={<Update />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
