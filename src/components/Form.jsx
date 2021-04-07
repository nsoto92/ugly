import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UglyContext } from '../UglyContext'

export default function Form() {
    const { data } = useContext(UglyContext)
    const [form, setForm] = useState({})
    const [edit, setEdit] = useState(false)

    console.log('Form Data: ', form)

    const postData = (e) => {
        e.preventDefault()
        axios.post('https://api.vschool.io/norbert/thing/', {
            title: form.title,
            description: form.description,
            imgUrl: form.imgUrl
        })
            .then(res => console.log(res))
            .then(() => {
                window.location.reload()
            })
    }

    const updateData = (e) => {
        e.preventDefault()
        axios.put(`https://api.vschool.io/norbert/thing/${edit}`, {
            title: form.title,
            description: form.description,
            imgUrl: form.imgUrl
        })
            .then(res => console.log(res))
            .then(() => {
                window.location.reload()
            })
    }

    return (
        <div style={{ margin: 'auto', width: '900px' }}>
            <h1>Add an Ugly thing:</h1>
            <form onSubmit={postData}>
                <label>Thing title:  </label>
                <input name='title' type="text" onChange={e => setForm({ ...form, title: e.target.value })} />
                <br />
                <label>Thing description:  </label>
                <input type="text" name='description' onChange={e => setForm({ ...form, description: e.target.value })} />
                <br />
                <label>Thing link:  </label>
                <input type="text" name='imgUrl' onChange={e => setForm({ ...form, imgUrl: e.target.value })} />
                <br />
                <button type='submit'>Submit</button>
                <br />
                <label>Select thing to edit (optional): </label>
                <select
                    onChange={e => setEdit(e.target.value)}
                >
                    <option> </option>
                    {data.map(d => {
                        return (
                            <option value={d._id}>{d.title}</option>
                        )
                    })}
                </select>
                <br />
                <label>Edit an existing thing: </label>
                <button
                    disabled={!edit}
                    onClick={updateData}
                >
                    Edit
                </button>
            </form>
        </div>
    )
}
