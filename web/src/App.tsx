import './styles/global.css'

import Habit from './components/habit'

function App() {
  return (
    <div>
      <Habit completed ={3} />
      <Habit completed ={20} />
    </div>
  )
}

export default App

//componente: reaproveitar /isolar
// propriedade: uma informação enviada pra modificar um componente visual ou comportalmente