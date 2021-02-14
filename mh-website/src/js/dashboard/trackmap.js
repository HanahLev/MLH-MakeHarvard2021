import { useHistory, useParams } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

import '../../sass/trackmap.scss'
import { useState, useEffect } from 'react';

import { clock, leftArrow, location } from '../../assets/asset'
import useAxios from 'axios-hooks'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function TrackMap() {
    let { zipcode } = useParams();

    let history = useHistory();
    const [{ data, loading, error }, refetch] = useAxios(
        'https://api.get-tested-covid19.org/api/v1/public/public-test-centers/zip/' + zipcode
    )



    //if zipcode is avail and tracks is not
    // then it is loading
    console.log(data)

    return (
        <div className='trackmap-wrappers'>

            <div className='trackmap-left '>
                <div className='trackmap-back-btn'
                    onClick={() => {
                        history.push('/dashboard')
                    }}
                >
                    {leftArrow} back
                </div>
                <PerfectScrollbar>
                    <div className='trackmap-list'>
                        {data && data.testCenters.map((item, index) => (
                            <TrackMapItem
                                key={index}
                                index={index}
                                {...item}
                            />
                        ))}
                    </div>
                </PerfectScrollbar>
            </div>
            <div className='trackmap-right'>
                {data && (

                    <MapContainer defaultCenter={{
                        lat: data.coords.latitude,
                        lng: data.coords.longitude
                    }} >
                        { data.testCenters.map((item, index) => (
                            <Marker
                                key={index}
                                label={item.name}
                                position={{
                                    lat: item["latitude"],
                                    lng: item["longitude"]
                                }}
                            />
                        ))}
                    </MapContainer>
                )}
            </div>
        </div>

    )

}

const MapContainer = (props) => {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };


    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCumPp-MUvheo1S7ixUDqVoz-13ypCnjE4'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={props.defaultCenter}
            >
            </GoogleMap>
        </LoadScript>
    )
}


function TrackMapItem(props) {
    //get list of items
    return (
        <div className='trackmap-item-wrapper'>
            <div className='center-name'>
                {props.index + 1}.{props.name}
            </div>
            <div className='center-address'>
                {location}{props.address}
            </div>
            {props["hours_of_operation"] && (

                <div className='center-hours'>
                    {clock}{props["hours_of_operation"]}
                </div>
            )}
        </div>

    )
}