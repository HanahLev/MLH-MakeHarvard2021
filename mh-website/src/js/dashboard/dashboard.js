import { useState, useEffect } from 'react';
import firebase from '../utils/firestore'
import "firebase/auth";
import { useHistory } from 'react-router-dom';
import { getUserFromUID } from '../utils/firestoreUtils'

export default function Dashboard() {
    //check if user exists
    let history = useHistory()
    const [userData, setUserData] = useState(null);
    console.log(123)
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
    return (
        <div className='dashboard-wrapper'>
            dashboard logged in
        </div>
    )

}