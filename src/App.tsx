import { AiOutlineSearch } from 'react-icons/ai'
import Card from './components/Card'

function App() {


  // Blog
  // Blog com search engine
  // Blog com CRUD
  // Add Dark Mode
  // Posteriormente, autenticação e niveis de autoridade
  return (
    <div className="h-full w-full flex flex-col gap-10">
      <header className="flex flex-col items-center w-full gap-8 bg-gradient-to-tl from-blue-400 to-violet-800 h-auto py-8">
        <div className="flex flex-row justify-between w-11/12 items-center text-white font-light">
          <span>TheReal</span>
          <span>Blog</span>
        </div>
        <div className='relative w-full justify-center flex flex-row mb-1'>
          <div className="absolute inset-y-0 left-3.5 flex items-center pl-3.5 pointer-events-none">
          <AiOutlineSearch className="text-xl text-white font-bold" />
          </div>
          <input type="text" className="outline-none p-2 w-11/12 rounded-lg pl-9 bg-opacity-25 bg-white text-white placeholder:text-white font-light text-sm" placeholder="Pesquisar no blog"></input>
        </div>
      </header>
      <main className="flex flex-col gap-3 justify-center items-center">
        <Card />
      </main>
    </div>
  )
}

export default App
