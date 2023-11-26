import './messages.css'
import Message from './Message'
import Response from './Response'
import Typing from './Typing'
import { IMessage } from '../../interfaces'

interface Props {
  list?: IMessage[],
}

const MessageHistory = ({ list = [] }: Props) => {
  const render = (msg: IMessage) => {
    
    const types = {
      response: <Response key={msg.id} from={msg.from} message={msg} />,
      message: <Message key={msg.id} from={msg.from} message={msg} />,
      typing: <Typing key={msg.id} from={msg.from} message={msg} />,
    }
   
    return types[msg.type as keyof typeof types] 
  }

  return (
    <ul className="list">
      {list.map(message => render(message))}      
    </ul>
  )
}

export default MessageHistory