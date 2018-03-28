/**
 * Created by admin on 2018/3/28.
 */

import {
  userlogin
} from "../server/global-server"

const state={

}

const getters={

}

const actions = {
  async userlogin_({commit,state},body){
    return await userlogin(body)
  }
}


const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}









