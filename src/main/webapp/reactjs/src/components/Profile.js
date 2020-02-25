import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }

    }

    componentDidMount() {
        const session = (localStorage.getItem("session") != undefined) ? localStorage.getItem("session") : '';
        this.setState({email : session})
    }


    render(){
        const text = this.state.email == '' ? '' : `Email: ${this.state.email}`;

        return(
            <div>
                <label className="bg-dark text-white">{text}</label>
            </div>
        )
    }


}

export default Profile;