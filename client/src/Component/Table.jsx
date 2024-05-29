import axios from "axios";
import { Component } from "react";



class Users extends Component {

    constractor(props) {
        super(props)
        this.state = {
            USR: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3031/api/get").then((response) => this.setState({ URS: response.data }))
    }
    deleteUser(id) {
        axios.delete("http://localhost:3031/api/delete/" + id).then(axios.get("http://localhost:3031/get").then((response) => this.setState({ URS: response.data }))
        )

    }
    render() {
        return (
            <div>
                <h1>welcome to Users Page</h1>
                {this.state.URS.map((item, key) => {
                    <ul key={index}>

                        <li>{item.name}</li>
                        <li>{item.lastname}</li>
                        <li>{item.email}</li>
                        <li>{item.phone}</li>

                        <button onClick={this.props.deleteUser(item.id)}>delete</button>



                    </ul>
                })}



            </div>

        )
    }
}



export default Users;