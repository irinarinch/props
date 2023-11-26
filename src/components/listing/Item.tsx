export type TypeItem = {  
  listing_id: number,
  url: string,
  MainImage: Record<string, object>,
  title: string,
  currency_code: string,
  price: string,
  quantity: number  
}

type typeProps = {
  item: TypeItem,
  key: number
}

const Item = ({item}: typeProps) => { 
  const {url, MainImage, title, currency_code, price, quantity} = item 
  
  const getTitle = (title: string) => {
    const shortTitle = title.slice(0, 50) + '...'

    return title.length >= 50 ? shortTitle : title     
  }

  const getPrice = (price: string, code: string) => {
    const symbols = {
      USD: '$',
      EUR: '€',
    }

    return code === 'USD' || code === 'EUR' ? symbols[code] + price : price + ' ' + code    
  }

  const getLevel = (quantity: number) => {
    if (quantity <= 10) return 'level-low item-quantity'
		if (quantity <= 20) return 'level-medium item-quantity'

		return 'level-high item-quantity'
  }

  return (         
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(title)}</p>
        <p className="item-price">{getPrice(price, currency_code)}</p>       
        <p className={getLevel(quantity)}>{`${quantity} left`}</p>
      </div>
    </div>
  )
}

export default Item