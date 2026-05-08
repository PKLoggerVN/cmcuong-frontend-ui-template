/* eslint-disable @typescript-eslint/no-unused-vars */
import { action, observable, makeObservable } from 'mobx'
import { create } from 'mobx-persist'
import GlobalStore, { GlobalHydration } from './global.store'

const isClient = typeof window !== 'undefined'
let hydrate
if (isClient) {
  hydrate = create({ storage: localStorage, jsonify: true })
}

export type RootStoreHydration = {
  loading?: boolean
  setLoader?: (loading: boolean) => void
  globalStore?: GlobalHydration
}

export default class RootStore {
  @observable loading = false
  globalStore: GlobalStore

  constructor() {
    this.globalStore = new GlobalStore(this)

    makeObservable(this)
  }

  @action setLoader(_loading: boolean) {
    this.loading = _loading
  }

  @action hydrate(data: RootStoreHydration) {
    if (data.globalStore) {
      this.globalStore.hydrate(data.globalStore)
    }
  }
}
