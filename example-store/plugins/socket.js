import Vue from 'vue'
import Socket from 'vue-native-websocket'


export default function () {
  Vue.use(Socket, 'ws://localhost:8080', {
    protocol: 'echo-protocol',
    format: 'json',
    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 100000, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 1000, // (Number) how long to initially wait before attempting a new (1000)
  })
}