import css from "../css/app.css"
import {Socket} from 'phoenix'
import LiveSocket from 'phoenix_live_view'

// LiveView will automatically all relevant views
let liveSocket = new LiveSocket("/live", Socket)
liveSocket.connect()
window.liveSocket = liveSocket
