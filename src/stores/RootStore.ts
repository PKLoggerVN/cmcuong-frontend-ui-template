import { makeAutoObservable } from 'mobx'
import { create } from 'mobx-persist'
import GlobalStore, { GlobalHydration } from './global.store'

const isClient = typeof window !== 'undefined'
let _hydrate
if (isClient) {
  _hydrate = create({ storage: localStorage, jsonify: true })
}

export type RootStoreHydration = {
  loading?: boolean
  setLoader?: (loading: boolean) => void
  globalStore?: GlobalHydration
}

export default class RootStore {
  loading = false
  globalStore: GlobalStore

  constructor() {
    this.globalStore = new GlobalStore(this)
    makeAutoObservable(this)
  }

  setLoader(_loading: boolean) {
    this.loading = _loading
  }

  hydrate(data: RootStoreHydration) {
    if (data.globalStore) {
      this.globalStore.hydrate(data.globalStore)
    }
  }
}
