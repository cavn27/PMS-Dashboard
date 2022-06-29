import React, { Component } from 'react';
import "../App.css";

class Prueba1 extends Component {
    
    state = {
        isLoading: true,
        users: [],
        error: null
    };
    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("https://opensheet.elk.sh/1fkzm7-DKoNwEuSNts1S-Xhbf-tJH0OAqKjT9EekHfIc/BestEmployee").then(res => res.json()).then(result => this.setState({
                loading: false,
                users: result
            })).catch(console.log);
        });
    }
    componentDidMount() {
        this.getFetchUsers();
    }

    render() {
        
        const { users, error } = this.state;

        return (
          <React.Fragment>
          {
                error ? <p>
          {
                error.message
                } </p> : null}  {
                    users.map(user => {
                        const {
                            ID,
                            Empleado
                        } = user;
                        return (
                        /*
                        <div key={ID}>
                            <p>ID: {ID}</p>
                            <p>Nombre: {Empleado}</p>
                            <p>Asistencia: {Asistencia}</p>
                            <p>Cumplimiento: {Cumplimiento}</p>
                            <hr />

                        </div>
                        */
                        <div key={ID}>
                            <p> <span role="img" aria-label="star"> ⭐ </span> {Empleado} </p>
                        </div>
                        );
                    })
                }
            </React.Fragment> );
        }
}


export default Prueba1;