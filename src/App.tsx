import Stars from "./components/stars/Stars"
import Listing from "./components/listing/Listing"
import MessageHistory from "./components/messages/MessageHistory"
import etsyJson from "./data/etsy.json" 
import messages from "./data/messages.js"
import { IItem } from "./components/listing/Item.js"

const App = () => {
  return (
    <>
      <h1>Props</h1>
      <div className="task">
        <h3>Задача 1. Рейтинг фильмов</h3>
        <Stars count={5}/>      
      </div>  
      <div className="task">
        <h3>Задача 2. Список предложений</h3>
        <Listing items={etsyJson as IItem[]}/>           
      </div>
      <div className="task">
        <h3>Задача 3. История чата</h3>
        <div className="clearfix container">
          <div className="chat">
            <div className="chat-history">
              <MessageHistory list={messages}/>
            </div>
          </div>  
        </div>    
      </div>       
    </>
  )
}

export default App