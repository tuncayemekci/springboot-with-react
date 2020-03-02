import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: ""
        }

    }

    componentDidMount() {

        if(!localStorage.getItem("session")){
            this.props.history.push("/");
        }

        console.warn("Profile.js ---> " + localStorage.getItem("session"));

        const session = (localStorage.getItem("session")) ? localStorage.getItem("session") : '';
        this.setState({email : session});
    }


    render(){
        const text = this.state.email === "" ? "" : `Email: ${this.state.email}`;

        return(
            <div className="text-center">
                <label className="bg-dark text-white">{text}</label>
            </div>
        )
    }


}

export default Profile;