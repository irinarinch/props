import { IProps } from "../../interfaces"

const Response = ({from, message}: IProps) => {
  return (
    <li>
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>        
        <i className="material-icons me">circle</i>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  )
}

export default Response