import React from 'react';

const Photos =(props)=> (
    <div className="PhotosContainer">
        <h1>Photo Display</h1>
        {props.photos.map(photo => 
        <div key={photo.id} className="PhotoCard">
        <h3>{photo.title}</h3>
        <img src={photo.url} className="img" alt={photo.title}/>
        
        </div>
        )}
    </div>
) 

export default Photos;