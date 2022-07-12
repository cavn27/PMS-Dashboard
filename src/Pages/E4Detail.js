import React, { Component } from 'react';
import "../App.css";

class E4Detail extends Component {
    
    state = {
        isLoading: true,
        users: [],
        error: null
    };
    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("https://opensheet.elk.sh/1fkzm7-DKoNwEuSNts1S-Xhbf-tJH0OAqKjT9EekHfIc/Employee4").then(res => res.json()).then(result => this.setState({
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
                            Asistencia,
                            Eficiencia,
                            Responsabilidad,
                            Metas,
                            Respeto
                        } = user;
                        return (
                        <div className="Employee-Details">
                            <p> <span role="img" aria-label="Asistencia"> 📆 </span> {Asistencia}</p>
                            <p> <span role="img" aria-label="Eficiencia"> 🔨 </span> {Eficiencia}</p>
                            <p> <span role="img" aria-label="Responsabilidad"> ✅ </span> {Responsabilidad}</p>
                            <p> <span role="img" aria-label="Metas"> 🎯 </span> {Metas}</p>
                            <p> <span role="img" aria-label="Respeto"> 🫱🏼‍🫲🏼 </span> {Respeto}</p>
                        </div>
                        );
                    })
                }
            </React.Fragment> );
        }
}


export default E4Detail;