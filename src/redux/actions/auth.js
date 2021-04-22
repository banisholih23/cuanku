import axios from '../../services/axios'
import {CITRA_API} from "@env"

const loginBroker = (data) => {
  return{
    type: 'LOGIN',
    payload: axios().post(`${CITRA_API}api/brokers/login`, data )
  }
}

const logout = ()=>{
  return {
    type: 'LOGOUT',
    payload: ''
  }
}

export {loginBroker, logout}