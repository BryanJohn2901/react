import DefaultButton from '../DefaultButton'
import DefaultInput from '../DefaultInput'
import Cycles from '../Cycles'
import { PlayCircleIcon } from 'lucide-react'

const mainform = () => {
    return (
        <form className="form" action=''>
            <div className="formRow">
                <DefaultInput labelText='task' id='meuInput' type='text' placeholder='Digite algo...' />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
                {/* <DefaultButton icon={<StopCircleIcon/>} color='red'/> */}
            </div>
        </form>
    )
}

export default mainform