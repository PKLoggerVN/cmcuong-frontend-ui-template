import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'
import { STATE } from '@/contains/enums'

export type GlobalHydration = {
  banners?: Array<any>
}

export default class GlobalStore {
  state = STATE.PENDING
  root: RootStore
  banners: Array<any> = []

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this, {
      root: false,
    })
  }

  setBanners(banners: Array<any>) {
    this.banners = banners
  }

  hydrate(data?: GlobalHydration) {
    if (data && data.banners) {
      this.banners = data.banners
    }
  }
}
