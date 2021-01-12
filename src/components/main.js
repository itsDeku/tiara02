import React from 'react'

import Profile from './profile'
import Home from  './home'
import Messages from './messages'
class Main extends React.Component {
    render() {
        return(
            <main>
                <Messages />
            </main>
        )
    }
}

export default Main 
