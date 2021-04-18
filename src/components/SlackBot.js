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

// import Slack from 'slack-node'
// import {SLACK_ERROR_WEBHOOK, SLACK_WELCOME_WEBHOOK} from '../password'

// const apiToken = process.env.SLACK_TOKEN||SLACK_TOKEN

// const slack = new Slack(apiToken)
// const slackError = new Slack
// slackError.setWebhook(SLACK_ERROR_WEBHOOK)

// const slackWelcome = new Slack
// slackWelcome.setWebhook(SLACK_WELCOME_WEBHOOK)

// const send = async(msgtype, message) => {
//     if(location.host.includes('localhost')) {
//         message = '(로컬서버)' + message
//     }

//     if(msgtype == 'error') {
//         slackError.webhook({
//             // channel: channel,
//             // username: "slack bot",
//             text: message
//         }, function (err, response) {
//             console.log(response)
//         })
//     }
//     else if(msgtype == 'welcome') {
//         slackWelcome.webhook({
//             // channel: channel,
//             // username: "slack bot",
//             text: message
//         }, function (err, response) {
//             console.log(response)
//         })
//     }

// }

// export {send}
