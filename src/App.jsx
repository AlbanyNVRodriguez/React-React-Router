import './App.css'
import { ContentNotes, ExampleContainer, Note } from './components'
import { RoutesApp } from './examples/RoutesApp'
import { reactNote, reactRouterNote } from './notes/mainNotes'

function App() {

  return (
    <div className="App">
      <header>
        <a href={reactNote.link} target="_blank" className='animate_rotate'>
          <img src={reactNote.logo} className="logo" alt="React logo" />
        </a>
        <a href={reactRouterNote.link} target="_blank" className='animate_rotate'>
          <img src={reactRouterNote.logo} className="logo" alt="React Router logo" />
        </a>
        <h1>React.js + React Router</h1>
        <ContentNotes>
          <Note note={reactNote} />
          <Note note={reactRouterNote} />
        </ContentNotes>
      </header>
      <main>
        <ExampleContainer children={<RoutesApp />} />
      </main>
    </div>
  )
}

export default App
