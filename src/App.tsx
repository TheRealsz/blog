

function App() {


  // Blog
  // Blog com search engine
  // Blog com CRUD
  // Add Dark Mode
  // Posteriormente, autenticação e niveis de autoridade
  return (
    <div className="h-full w-full">
      <header className="flex flex-col items-center w-full gap-8 bg-gradient-to-l from-blue-500 to-purple-500 h-auto py-6">
        <div className="flex flex-row justify-between w-11/12 items-center text-white font-light">
          <span>TheReal</span>
          <span>Blog</span>
        </div>
        <div>
          <input type="text" placeholder="Pesquisar no blog"></input>
        </div>
      </header>
      <main className="flex flex-col gap-3 justify-center items-center"></main>
    </div>
  )
}

export default App
