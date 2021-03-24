
import Slack from 'slack-node'
import {SLACK_TOKEN} from '../password'

const apiToken = process.env.SLACK_TOKEN||SLACK_TOKEN

const slack = new Slack(apiToken)

console.log(slack)

const send = async(channel, message) => {
slack.api('chat.postMessage', {
    username: 'slack bot',
    text: message,
    channel: channel,
    icon_emoji: 'slack'
}, function(err, response){
    console.log(response)
})
}

export {send}