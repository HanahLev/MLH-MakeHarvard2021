import React, { useState, useEffect } from 'react';
import firebase from '../utils/firestore'
import "firebase/auth";
import { useHistory, useRouteMatch, Switch, Route, } from 'react-router-dom';
import { getUserFromUID } from '../utils/firestoreUtils'

import TrackMap from './trackmap'
import { CustomLink } from '../components'

import { dashboardsvg, plussvg, modalsvg } from '../../assets/asset'

import '../../sass/dashboard.scss'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default function Dashboard() {
    //check if user exists
    let history = useHistory()
    let { path, url } = useRouteMatch();
    const [userData, setUserData] = useState(null);
    console.log(path)

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        console.log(firebase.auth().currentUser)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                getUserFromUID(user.uid)
                    .then(data => {
                        if (data) {
                            setUserData(data)
                            console.log(user)
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
    console.log('user is avail!!', userData)
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
                        <div className='covidbtn'
                            onClick={() => {
                                history.push(`${path}/trackmap/90502`)
                            }}
                        >
                            COVID TESTS NEAR ME
                        </div>
                        <div className='plus-wrapper'
                            onClick={() => {
                                openModal(true)
                            }}
                        >
                            {plussvg}
                        </div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Add a Device"
                        >
                            {modalsvg}

                        </Modal>
                        {dashboardsvg}
                        <div className='greeting'>
                            Good Evening, <span>{
                                userData.get('first') + " " + userData.get('last')
                            }</span>
                        </div>
                    </div>
                </Route>
            </Switch>

        </div>
    )

}