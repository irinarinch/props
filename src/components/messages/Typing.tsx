import { IProps } from "../../interfaces"

const Typing = ({from, message}: IProps) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">{from.name}</span>
        <i className="online material-icons">circle</i>
        <span className="message-data-time">{message.time}</span>
      </div>
      <i className="online material-icons">circle</i>
      <i className="online material-icons second-circle">circle</i>
      <i className="online material-icons third-circle">circle</i>
    </li>
  )
}

export default Typing
