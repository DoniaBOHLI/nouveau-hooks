import React from "react";
import Petcard from './Petcard 

function Pelslist({petslist}){
    const list =Petslis.map (  => < Petcard
        
        movieTitle =(petslist.name)
        movieDescription=(petslist.type)
        movieImage=(petslist.photo)
 />
    )


    return (
   < div>
         {list}
   </div>
    )

}

export default Petslist;