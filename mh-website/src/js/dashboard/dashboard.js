import { useState, useEffect } from 'react';
import firebase from '../utils/firestore'
import "firebase/auth";
import { useHistory, useRouteMatch, Switch, Route, } from 'react-router-dom';
import { getUserFromUID } from '../utils/firestoreUtils'

import TrackMap from './trackmap'
import { CustomLink } from '../components'


export default function Dashboard() {
    //check if user exists
    let history = useHistory()
    let { path, url } = useRouteMatch();
    const [userData, setUserData] = useState(null);
    console.log(path)

    useEffect(() => {
        console.log(firebase.auth().currentUser)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                getUserFromUID(user.uid)
                    .then(data => {
                        if (data) {
                            setUserData(data)
                        } else {
                            history.push('/login')
                        }
                    })
            } else {
                console.log(user)
            }
        });
    }, []);
    if (!userData) {
        return (
            <div className='dashboard-wrapper'>
                no account found/ pls log in :3
            </div>
        )
    }
    console.log('user is avail!!', path)
    return (
        <div className='dashboard-wrapper'>
            <Switch>

                <Route path={`${path}/trackmap/:zipcode`}>
                    <TrackMap />
                </Route>
                <Route path={`${path}/trackmap/`}>
                    <TrackMap />
                </Route>
                <Route exact path={path}>
                    <div>
                        regular dashboard!!
                        <span
                            onClick={() => {
                                history.push(`${path}/trackmap/90502`)
                            }}
                        >
                            click
                        </span>

                    </div>
                </Route>
            </Switch>

        </div>
    )

}