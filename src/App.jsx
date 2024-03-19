import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TagManager from 'react-gtm-module'
import './App.css'

const tagManagerArgs = {
    gtmId: 'GTM-WHZ2SFNT'
}

TagManager.initialize(tagManagerArgs)


function App() {
  const [count, setCount] = useState(0)
  window.dataLayer.push({
    event: 'event',
    eventProps: {
      category: "category",
      action: "action",
      label: "label",
      value: "value"
    }
  });
  const handlePriceClick = () => {
        window.dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: 'T_12345',
            affiliation: 'Google Merchandise Store',
            value: 25.42,
            tax: 4.90,
            shipping: 5.99,
            currency: 'USD',
            coupon: 'SUMMER_SALE',
            items: [
             {
              item_id: 'SKU_12345',
              item_name: 'Stan and Friends Tee',
              item_category: 'Apparel',
              price: 9.99,
              quantity: 1
             },
             {
              item_id: 'SKU_12346',
              item_name: "Google Grey Women's Tee",
              item_category: 'Apparel',
              price: 20.99,
              quantity: 1
             }]
            }
          });
  }
  const handleClick = () => {
    window.dataLayer.push({
      'event':'author',
      'authorData' : {
      'pagePostAuthor': 'Yee'
      }
      });
      window.dataLayer.push({
        'authorData' : {
        'pageCategory': 'google-tag-manager-tips',
        'pagePostType': 'post'
        }
        });

  }
  console.log('window',window.dataLayer)
    return (
        <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handlePriceClick} style={{backgroundColor:"yellow",padding:"2rem"}}>price</button>
      <button onClick={handleClick} style={{backgroundColor:"red",padding:"2rem"}}>normal</button>
  </>
  )
}

export default App
