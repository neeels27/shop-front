import React, { useState } from 'react'
import styles from "./Filter.module.scss";
import Categories from './Categories';




export default function Filter() {
    const [data, setData]= useState(Categories);
    const filterResult=(catItem)=>{
        const result=Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }
  return (
    <>
        <h1>Filtrer par catégories</h1>
        <div>
            <div>
                <div>
                    <button className="btn btn-white" onClick={() => filterResult("Homme")}>Homme</button>
                    <button className="btn btn-white" onClick={() => filterResult("Femme")}>Femme</button>
                    <button className="btn btn-white" onClick={() => filterResult('Enfant')}>Enfant</button>
                    <button className="btn btn-white" onClick={() => filterResult('Domicile')}>Domicile</button>
                    <button className="btn btn-white" onClick={() => filterResult('Exterieur')}>Exterieur</button>
                    <button className="btn btn-white" onClick={() => setData(Categories)}>Toutes les catégories</button>
                </div>
            </div>
        </div>
        <div>
            {data.map((values) => {
                const {id, title, price} = values;
                return(
                    <>
                        <div key={id}>
                            <h5>{title}</h5>
                            <p>{price}</p>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}
