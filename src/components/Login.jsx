import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        //Ca permet l'utilisattion de 'this' dans la fonction de rappel  
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showPassword = this.showPassword.bind(this);

        this.state = {
            email: '',
            password: '',
            hidden: true,
            loading: false,
            errors: {}
        }
    }

    showPassword() {
        this.setState({ hidden: !this.state.hidden });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    // Clck on submit button
    onSubmit(e) {
        e.preventDefault();
        
        const submitLog = {
            email: this.state.email,
            password: this.state.password
        }

        axios
            .post({/* appel la route qui permet de faire la connexion */}, submitLog)
            .then(res => {
                console.log(res.data);
                this.setState({
                    loading: false
                });
                this.props.history.push({/* qui renvoit vers un page quannd l'utilisateur a reussi a se connecter */})
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }

    render() {

        const { errors } = this.state;

        return (
            <div className="container-login container-register  ">
                <span className="logo-back">
                    <Link to="/"><i className="fas fa-arrow-left"></i></Link>
                </span>
                <div className="container-login-without">
                    <h1>Print'n go</h1>
                    <p className="header">Connecte-toi avec ton adresse e-mail pour commencer a partager tes réalisations.</p>
                    <form onSubmit={this.onSubmit}>
                        <div className="content">
                            <div className="form">
                                <TextField 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="E-mail" 
                                    helperText={errors.email}
                                    error={errors.email ? true : false}
                                    value={this.state.email} 
                                    onChange={this.onChangeEmail} 
                                />
                                <div>
                                    <TextField 
                                        type={this.state.hidden ? "password" : "text"} 
                                        id="password" 
                                        name="password" 
                                        placeholder="Mot de passe" 
                                        helperText={errors.password}
                                        error={errors.password ? true : false}
                                        value={this.state.password} 
                                        onChange={this.onChangePassword}
                                    />
                                    <i className="fas fa-eye" onClick={this.showPassword}></i>
                                </div>
                            </div>
                            <div>
                                <Button 
                                    type="submit" 
                                    className="btn">
                                    Se connecter
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
