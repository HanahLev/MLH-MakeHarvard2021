import { useHistory, useParams } from 'react-router-dom';
import { GoogleMap, Marker } from "react-google-maps"

import '../../sass/trackmap.scss'

export default function TrackMap() {
    let { zipcode } = useParams();
    if (zipcode) {
        //send request to api
    }

    return (
        <div className='trackmap-wrappers'>

            <div className='trackmap-left '>
                <div className='trackmap-back-btn'>
                    back
                </div>
            </div>
            <div className='trackmap-right'>

            </div>
        </div>

    )

}