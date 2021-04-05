import React, { Component } from "react"
import axios from 'axios'
const UglyContext = React.createContext()

class UglyContextProvider extends Component {
    state = {
        data: []
    }

    setData = () => {
        axios.get('https://api.vschool.io/norbert/thing/')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => console.log(err))
    }

    deleteData = (id) => {
        axios.delete(`https://api.vschool.io/norbert/thing/${id}`)
            .then(() => {
                window.location.reload()
            })
    }

    render() {
        return (
            <UglyContext.Provider value={{ data: this.state.data, setData: this.setData, deleteData: this.deleteData }}>
                {this.props.children}
            </UglyContext.Provider>
        )
    }
}

export { UglyContextProvider, UglyContext }