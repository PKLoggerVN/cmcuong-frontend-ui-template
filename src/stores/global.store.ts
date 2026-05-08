import { action, observable, makeObservable } from 'mobx'
import RootStore from './RootStore'
import { STATE } from '@/contains/enums'

export type GlobalHydration = {
  banners?: Array<any>
}

export default class GlobalStore {
  @observable state = STATE.PENDING
  @observable root: RootStore
  @observable banners: Array<any> = []

  constructor(root: RootStore) {
    this.root = root
    makeObservable(this)
  }

  @action setBanners(banners: Array<any>) {
    this.banners = banners
  }

  @action hydrate(data?: GlobalHydration) {
    if (data && data.banners) {
      this.banners = data.banners
    }
  }
}
