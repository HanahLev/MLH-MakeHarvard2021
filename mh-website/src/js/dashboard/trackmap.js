import { useHistory, useParams } from 'react-router-dom';
import { GoogleMap, Marker } from "react-google-maps"
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

import '../../sass/trackmap.scss'
import { useState, useEffect } from 'react';

import { leftArrow, location } from '../../assets/asset'
import useAxios from 'axios-hooks'


export default function TrackMap() {
    let { zipcode } = useParams();
    var zip = zipcode
    if (!zipcode) {
        zip = 90502
    }
    //guarentees zip code
    const [tracks, setTracks] = useState()

    const [{ data, loading, error }, refetch] = useAxios(
        'https://api.get-tested-covid19.org/api/v1/public/public-test-centers/zip/' + zip
    )
    //if zipcode is avail and tracks is not
    // then it is loading


    return (
        <div className='trackmap-wrappers'>

            <div className='trackmap-left '>
                <div className='trackmap-back-btn'>
                    {leftArrow} back
                </div>
                <PerfectScrollbar>
                    <div className='trackmap-list'>

                    </div>
                </PerfectScrollbar>
            </div>
            <div className='trackmap-right'>

            </div>
        </div>

    )

}


function TrackMapItem(props) {
    //get list of items
    return (
        <div className='trackmap-item-wrapper'>
            <span className='index'>
                {props.index}.
            </span>
            <span>
                {location}{props.name}
            </span>

        </div>

    )
}