import React, { useState, useEffect } from 'react'
import Axios from '../../Utils/axios'


interface Cardobj  {
    firstCard:number,
    secondCard:number
    numberOfErrors:number
    Score:number
}


const game:React.FC<{name:string}> =(props) => {

    const [data,SetData] = useState([])


    let obj:Cardobj = {
        firstCard: -1,
        secondCard:-1,
        numberOfErrors:0,
        Score:0
    }


    console.log(obj.firstCard);
    

    useEffect(() =>{

      const request = async () =>{

        const responce = await Axios.get('/?page=1')
        
        console.log(responce);
        
        SetData(responce.data)


      }      
      request()
    },[])



    return (
        <div>

        </div>
    )
}
export default game
