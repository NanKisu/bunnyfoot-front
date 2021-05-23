import axios from 'axios'
import {store} from '../store'

const send = async (msgType, message) => {
  // let url = location.protocol + '//' + location.host + '/server/sendSlackMsg'
  let url = store.state.apiUrl + 'sendSlackMsg'

  let fd = {}
  fd.channel = msgType
  fd.msg = message

  axios.post(url, fd)
    .then(resp => {
    })
    .catch(error => {
      console.log('슬랙 메시지 전송 실패' + error)
    })
}

export {send}