/*
  App - Counter
      - SuperMarket - SuperMarketTemplate - ShopItemList    - ShopItem
                                          - BasketItemList  - BasketItem
*/

import React, { Component } from 'react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket';
import DevTools from 'mobx-react-devtools'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
        {process.env.NODE_DEV === 'development' && <DevTools/>}
      </div>
    );
  }
}

export default App;