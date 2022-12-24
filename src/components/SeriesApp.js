import React, { useState } from "react";
import { series } from "../data/SerieData";

function SeriesApp () {
    const [seriesData, setSeriesData] = useState (series)
    const [serie, setSerie] = useState ({
        title:"",
        posterURL:"",
        description:"",
        rate:"",
    })

    const addSerie = () => {setSeriesData([...seriesData, 
    {
        title: serie.title,
        posterURL: serie.poster,
        description: serie.description,
        rate: serie.rate,
    }])
    } 

    return (
        <div >
            <button onClick={addSerie}>Add a TV Show!</button>
            <input type="text" value={serie.title} onChange={e => setSerie({title: e.target.value})} />
            <input type="text" value={serie.poster} onChange={e => setSerie({posterURL: e.target.value})}/>
            <input type="text" value={serie.description} onChange={e => setSerie({description: e.target.value})}/>
            <input type="text" value={serie.rate} onChange={e => setSerie({rate: e.target.value})}/>
            <div className='MoviesItems'>
                {seriesData.map(item => (
                    <div className="movieCard">
                        <h2>{item.title}</h2>
                        <img src={item.posterURL} alt={item.title} />
                        <p>{item.description}</p>
                        <h3>{item.rate}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SeriesApp;