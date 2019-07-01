import CounterStore from './counter'
import MarketStore from './market'

class RootStore {
    constructor() {
        // 뒤에 this를 parameter로 넣어서 각 스토어들이 루트 스토어가 무엇인지 알게 한다.
        this.counter = new CounterStore(this)
        this.market = new MarketStore(this)
    }
}

export default RootStore;