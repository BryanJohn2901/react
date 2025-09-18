// App.tsx
import Container from './components/Container'
import CountDown from './components/CountDown'
import DefaultInput from './components/DefaultInput'
import Logo from './components/Logo'
import Menu from './components/Menu'

import './styles/global.css'
import './styles/theme.css'

export default function App() {
  return (
    <>
    <Container>
      <Logo />
    </Container>

    <Container>
      <Menu />
    </Container>

    <Container>
      <CountDown />
    </Container>

    <Container>
      <form className='form' action="">
        <div className='formRow'>
          <DefaultInput id='input' type='text'/>
        </div>

        <div className='formRow'>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='formRow'>
          <p>Ciclos</p>
          <p>0 0 0 0 0 0</p>
        </div>

        <div className='formRow'>
          <button>Enviar</button>
        </div>


      </form>
    </Container>
    </>

  )
}
