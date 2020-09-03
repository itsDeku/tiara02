import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            destination: '',
            dietaryRestiction: {
                isVegan: false,
                isKosher: false,
                isLactosFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { type, name, value, checked } = event.target;
        if(type==='checkbox'){
            this.setState((prevState) => {
                return{
                    dietaryRestiction:{
                        ...prevState.dietaryRestiction,
                        [name]: checked
                    }
                }
            })
        }else{
            this.setState({
                [name]: value
            })
        }


    }

    render() {
        return (
            <div>
                <form>
                    <input type='text'
                        name='firstName'
                        value={this.state.firstName}
                        placeholder='first name'
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input type='text'
                        name='lastName'
                        value={this.state.lastName}
                        placeholder='last name'
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>
                        <input type='radio'
                            name='gender'
                            value='male'
                            checked={this.state.gender === 'male'}
                            onChange={this.handleChange}
                        /> male
                    </label>
                    <label>
                        <input type='radio'
                            name='gender'
                            value='female'
                            checked={this.state.gender === 'female'}
                            onChange={this.handleChange}

                        /> female
                    </label>
                    <br />
                    <br />
                    <label>
                    destination:
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value='' >please select the destination</option>
                        <option value='frence'>frence</option>
                        <option value='germany'>germany</option>
                        <option value='nutherland'>nutherland</option>
                        <option value='greenland'>greenland</option>
                    </select>
                    </label>
                    <br />
                    <br />
                        <label>
                            isVegan:
                            <input type='checkbox'
                            name='isVegan'
                            value= 'isVegan'
                            checked= {this.state.dietaryRestiction.isVegan}
                            onChange={this.handleChange}/>
                        </label>
                        <br />
                        <br />
                        <label>
                            isKosher:
                            <input type='checkbox'
                            name='isKosher'
                            value='isKosher'
                            checked= {this.state.dietaryRestiction.isKosher}
                            onChange={this.handleChange}/>
                        </label>
                        <br />
                        <br />

                        <label>
                            isLactosFree:
                            <input type='checkbox'
                            name='isLactosFree'
                            value='islactosfree'
                            checked= {this.state.dietaryRestiction.isLactosFree}
                            onChange={this.handleChange}/>
                        </label>


                    <br />
                    <br />
                    <button><b>Submit</b></button>
                    <br />
                    <br />
                </form>
                <hr />
                <h2>Enter information</h2>
                <p><b>Name: </b>{this.state.firstName} {this.state.lastName} </p>
                <p><b>Gender: </b>{this.state.gender}</p>
                <p><b>Destination: </b>{this.state.destination} </p>
                <p><b>DietaryRestiction: </b>{this.state.firstName} {this.state.lastName} is {this.state.dietaryRestiction.isVegan?"vegan":"non-vagitarian"}, {this.state.dietaryRestiction.isKosher?"is kosher":"is not a kosher"} and {this.state.dietaryRestiction.isLactosFree?"is Lactos Free":"is not a Lactos Free"} </p>
            </div>
        )
    }
}
export default App