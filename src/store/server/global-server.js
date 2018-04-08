/**
 * Created by admin on 2018/3/28.
 */

import http from "../http"
import {toBodyString} from "../../utils"
import md5 from "../../md5"

export const userlogin = (body = {}) => {
  let b = Object.assign({}, body);
  b.password = (b.password && b.username) ? md5(b.username + md5(b.password)) : '';
  return http.post(`/user/login`, b);
};

export const getUserInfo = (body={})=>{
  let query = toBodyString(body);
  return http.get(`/user/info?${query}`)
}



