import { IItem } from "./Item"
import Item from "./Item"

import './Listing.css'

interface IProps {
  items: IItem[]
}

const Listing = ({items = []}: IProps) => {
  const array:JSX.Element[] = [];
  items.forEach(item => {
    if (!item.url) return 
  
    const el = <Item key={item.listing_id} item={item}/>
    array.push(el)
  })
   
  return (
    <div className="item-list">{array}</div>
  )
}

export default Listing