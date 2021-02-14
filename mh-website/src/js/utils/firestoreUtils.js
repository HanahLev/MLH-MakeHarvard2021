import { firestore as db } from './firestore'



const defaultValues = {
    email: ''
}

export function getUserFromUID(uid) {
    var userRef = db.doc('users/' + uid);
    return userRef.get()
        .then(data => {
            if (!data.exists) {
                //return false
                return null
            }
            return data
        })
}