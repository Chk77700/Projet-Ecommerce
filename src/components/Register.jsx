import React, {Component} from "react";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {Form} from "react-bootstrap";
import axios from 'axios';
import Login from "./Login";

export default class Register extends Component {
    constructor(props) {
        super(props);
        //Ca permet l'utilisattion de 'this' dans la fonction de rappel 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeEmailconfirm = this.onChangeEmailconfirm.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordconfirm = this.onChangePasswordconfirm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.showPassword = this.showPassword.bind(this);

        this.state = {
            username: '',
            email: '',
            emailconfirm: '',
            password: '',
            passwordconfirm: '',
            user: [],
            hidden: true,
            loading: false,
            errors: {},
            register: true,
            vendeur: false
        }

    }

    componentDidMount() {
        if(localStorage.getItem("userId") !== null)
            this.setState({register: null})

    }

    showPassword() {
        this.setState({hidden: !this.state.hidden});
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
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

    onChangePasswordconfirm(e) {
        this.setState({
            passwordconfirm: e.target.value
        });
    }

    onChangeEmailconfirm(e) {
        this.setState({
            emailconfirm: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        let role = "";
        if(!this.state.vendeur) role = "client";
        else role = "vendeur";

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: role
        }
        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        }
        console.log(user)

        axios
            .post("http://localhost:8000/register", user, config)
            .then(res => {
                if (res.data)
                    this.setState({register: null});
                else this.setState({error: "erreur"})
                console.log(res.data);
                // this.setState({
                //     loading: false
                // });
                // this.props.history.push('/')
            })
        // .catch(err => {
        //     this.setState({
        //         errors: err.response.data,
        //         loading: false
        //     })
        // })
    }


    render() {

        const {errors} = this.state;

        if (this.state.register)
            return (
                <div className="container-register">
                <span className="logo-back">
                    {/*<Link to="/"><i className="fas fa-arrow-left"></i></Link>*/}
                </span>
                    <h1 className="header">S'inscire</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form">
                            <div>
                                <h3 className="h3-register">TON NOM D'UTILISATEUR</h3>
                                <TextField
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Nom d'utilisateur"
                                    helperText={errors.username}
                                    error={errors.username ? true : false}
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <div>
                                <h3 className="h3-register">IMFORMATION DU COMPTE</h3>
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
                                <TextField
                                    type="email"
                                    name="emailconfirm"
                                    id="emailconfirm"
                                    placeholder="confirmer votre adresse e-mail"
                                    helperText={errors.emailconfirm}
                                    error={errors.emailconfirm ? true : false}
                                    required value={this.state.emailconfirm}
                                    onChange={this.onChangeEmailconfirm}
                                />
                                <div>
                                    <div>
                                        <TextField
                                            id="password"
                                            name="password"
                                            placeholder="Mot de passe"
                                            helperText={errors.password}
                                            error={errors.password ? true : false}
                                            type={this.state.hidden ? "password" : "text"}
                                            value={this.state.passowrd}
                                            onChange={this.onChangePassword}
                                        />
                                        <i className="fas fa-eye" onClick={this.showPassword}></i>
                                    </div>
                                    <div>
                                        <TextField
                                            type={this.state.hidden ? "password" : "text"}
                                            name="passwordconfirm"
                                            id="passwordconfirm"
                                            placeholder="Confirmer votre mot de passe"
                                            helperText={errors.passwordconfirm}
                                            error={errors.passwordconfirm ? true : false}
                                            value={this.state.passwordconfirm}
                                            onChange={this.onChangePasswordconfirm}
                                        />
                                        <i className="fas fa-eye" onClick={this.showPassword}></i>
                                    </div>
                                    <Form.Check onChange={() =>
                                        this.state.vendeur === false  ? this.setState({vendeur: true}) : this.setState({vendeur: false})
                                    } type="checkbox" label="Je suis un vendeur" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                variante="contained"
                                color="primary">
                                Creer un compte
                            </Button>
                            <Button
                                variante="contained"
                                color="primary"
                                onClick={() => this.setState({register: null})}>
                                Se connnecter
                            </Button>
                        </div>
                    </form>
                </div>
            )
        else return (
            <Login/>
        )
    }
}
