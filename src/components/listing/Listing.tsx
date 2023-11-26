import { TypeItem } from "./Item"
import Item from "./Item"

import './Listing.css'

const Listing = ({items = []}: Record<string, object>) => {

  const array: TypeItem[] = []

  items.forEach((item: TypeItem) => {
    if (!item.url) return

    const newItem = {
      listing_id: item.listing_id,
      url: item.url,
      MainImage: item.MainImage,
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity,
    }

    array.push(newItem)
  })
   
  return (
    <div className="item-list">
      {array.map(item => <Item key={item.listing_id} item={item}/>)}      
    </div>
  )
}

export default Listing