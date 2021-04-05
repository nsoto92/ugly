import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UglyContext } from '../UglyContext'

export default function Form() {
    const { data, setData, } = useContext(UglyContext)
    const [form, setForm] = useState({})

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
            </form>
        </div>
    )
}
