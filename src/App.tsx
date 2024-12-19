import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Blog from './pages/Blog'
import DetailPage from './pages/DetailPage'
import blogData from './data/BlogData'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/detail/:id' element={<DetailPage details={blogData} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
