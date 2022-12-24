import React, { useState } from 'react';
import { movies } from '../data/MoviesData';



function StreamTest(){
const initialCount = 0
const [count, setCount] = useState (initialCount)
const [person, setPerson] = useState ({
    name : "",
    prenom : "",
})
const addName = (e) => {setPerson({...person, name : e.target.value})} 
const addPrenom = (e) => {setPerson ({...person, prenom : e.target.value})}

const incrementCount = () => {setCount(count+1)}
const decrementCount = () => {setCount(count-1)}
const incrementFive = () => {
    for (let i=0; i<5; i++){
        setCount(prevCount => prevCount + 1)
    }
}

    return(
        <div>
            <div className='TestStream'>
                <form>
                <input type="text" value={person.name} onChange={addName}/>
                <input type="text" value={person.prenom} onChange={addPrenom} />
                <button>ADD PROFIL</button>
                <p>nom:{person.name}</p>
                <p>prenom:{person.prenom}</p>
                </form>
                <hr />
                <button onClick={incrementCount}>+</button>
                <span>{count}</span>
                <button onClick={decrementCount}>-</button>
                <button onClick={() => setCount(initialCount)}>RESET</button>
                <button onClick={incrementFive}>+ 5</button>
            </div>
            <div>
                <button>ADD MOVIE!</button>
            </div>
        </div>
    )
}

export default StreamTest;