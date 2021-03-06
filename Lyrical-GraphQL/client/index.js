import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import SongList from './components/SongList'
import App from './components/App'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

const client = new ApolloClient({
    // this takes the ID off of every record and gives apollo a way to remember that record
    // this will allow for rerendering when a single record is updated.
    // the alternative to this is to use refetchQueries
    dataIdFromObject: o => o.id
})

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App} >
                    <IndexRoute component={SongList}/>
                    <Route path="songs/new" component={SongCreate}/>
                    <Route path="songs/:id" component={SongDetail}/>
                </Route>
            </Router>
        </ApolloProvider>
    )
}

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
)
