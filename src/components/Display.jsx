import React, { useContext, useEffect } from 'react'
import { UglyContext } from '../UglyContext'

export default function Display(props) {
    const { data, setData, deleteData } = useContext(UglyContext)

    console.log('Data: ', data)

    useEffect(() => {
        setData()
    }, [])

    return (
        <div style={{ width: '900px', margin: 'auto' }}>
            <h1>Ugly List:</h1>
            {data.map(d => {
                return (
                    <div style={{ display: 'grid', gridTemplateColumns: '550px 300px' }} key={d._id + "key"}>
                        <div>
                            <img src={d.imgUrl} alt={d.description} style={{ width: '500px', height: '300px' }} />
                        </div>
                        <div>
                            <h1>{d.title}</h1>
                            <p>{d.description}</p>
                            <button onClick={() => { deleteData(d._id) }}
                            >
                                Delete Thing
                            </button>
                        </div>


                    </div>
                )
            })}
        </div>
    )
}


