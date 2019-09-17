import { observable, action, runInAction } from 'mobx'
import * as services from './services'
import ErrorCode from '@/config/errorcode'

class HomeStore {
  @observable home = ''

  @action
  fetchHome = async () => {
    const response = await services.fetchHome()
    if (response.data.errorCode === ErrorCode.SUCCESS) {
      runInAction(() => {
        this.home = response.data.result
      })
    }
  }
}

export default new HomeStore()
