
import Slack from 'slack-node'
import {SLACK_TOKEN} from '../password'

const apiToken = process.env.SLACK_TOKEN||SLACK_TOKEN

const slack = new Slack(apiToken)

console.log(slack)

const send = async(message) => {
slack.api('chat.postMessage', {
    username: 'slack bot',
    text: message,
    channel: '오류',
    icon_emoji: 'slack'
}, function(err, response){
    console.log(response)
})
}

export default send