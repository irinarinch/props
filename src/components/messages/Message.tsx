import { IProps } from "../../interfaces"

const Message = ({from, message}: IProps) => {
  return (
    <li>
      <div className="message-data">      
        <span className="message-data-name">{from.name}</span>
        <i className="online material-icons">circle</i>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  )
}

export default Message