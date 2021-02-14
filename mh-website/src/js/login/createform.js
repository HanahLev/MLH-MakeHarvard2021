
import 'materialize-css';
import { TextInput, Row, Col } from 'react-materialize';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import foreach from 'lodash.foreach';

import { createUserFromUID } from '../utils/firestoreUtils'


const fields = [
    'first',
    'last',
    'age',
    'weight',
    'gender',
    'heightfeet',
    'heightinches'
]

export default function CreateForm(props) {

    //var values = {}
    const [values, setValues] = useState({})
    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        console.log(name, ' ', value)
        values[name] = value
        setValues(values)
    }

    let history = useHistory()

    return (
        <>
            <div className='login-subtitle'>
                create your account
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(values)
                var valid = true
                foreach(values, (value, key) => {
                    if (!fields.includes(key)) {
                        valid = false;
                    }
                })
                if (valid) {
                    createUserFromUID(props.uid, values)
                        .then(() => {
                            history.push('/dashboard')
                        })
                }
            }}>
                <Row className='login-row'>
                    <Col s={6}  >
                        <TextInput
                            label='first'
                            className='login-email'
                            onChange={handleInputChange}
                            id='first'
                        />
                    </Col>
                    <Col s={6}  >
                        <TextInput

                            label='last'
                            className='login-email'
                            onChange={handleInputChange}
                            id='last'
                        />
                    </Col>
                </Row>
                <Row className='login-row'>
                    <Col s={6}  >
                        <TextInput
                            label='age'
                            className='login-email'
                            onChange={handleInputChange}
                            id='age'
                            type='number'
                        />
                    </Col>
                    <Col s={6}  >
                        <TextInput
                            label='gender'
                            className='login-email'
                            onChange={handleInputChange}
                            id='gender'
                        />
                    </Col>

                </Row>
                <Row className='login-row'>
                    <Col s={4}  >
                        <TextInput
                            label='weight (lbs)'
                            className='login-email'
                            onChange={handleInputChange}
                            id='weight'
                            type='number'
                        />
                    </Col>
                    <Col s={4}  >
                        <TextInput
                            label='height (feet)'
                            className='login-email'
                            onChange={handleInputChange}
                            id='heightfeet'
                            type='number'
                        />
                    </Col>
                    <Col s={4}  >
                        <TextInput
                            label='height (inches)'
                            className='login-email'
                            onChange={handleInputChange}
                            id='heightinches'
                            type='number'
                        />
                    </Col>
                </Row>
                <button className='create-form-submit' type='submit'>
                    proceed
                </button>
            </form>
        </>
    )
}