import React from "react";

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            date: "",
            password: ""
        };
    }

    render() {
        const { email, name, date, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={this.handleChange}
                />
                <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    name="date"
                    type="date"
                    placeholder="Enter your date"
                    value={date}
                    onChange={this.handleChange}
                />
                <label htmlFor="email">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={this.handleChange}
                />

                <button className="logbutton" type="submit">Login</button>
            </form>
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
    };
}
