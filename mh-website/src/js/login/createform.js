
import 'materialize-css';
import { TextInput, Row, Col } from 'react-materialize';



export default function CreateForm() {

    var values = {}

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        console.log(name, ' ', value)
        values[name] = value

        console.log(values)
    }

    return (
        <>
            <div className='login-subtitle'>
                create your account
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(values)
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