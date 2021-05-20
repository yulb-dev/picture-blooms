import { getUser } from '../network/mySelf'
import '../scss/setUp.scss'

export function setUpbeforeRouteUpdate(Dom) {
    if (!this.props.user) {
        getUser().then((data) => {
            if (data && !data.keyValue) {
                this.props.increment(data)
            }
            else {
                this.props.history.replace('/myself')
            }
        })
    }
}

export default function beforeRouteUpdate() {
    if (!this.props.user) {
        getUser().then((data) => {
            if (data && !data.keyValue) {
                this.props.increment(data)
                this.props.history.replace('/myself')
            }
        })
    }
}