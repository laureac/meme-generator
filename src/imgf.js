import React, {useState, useEffect} from 'react';

function Im(){

const [templates, setTemplates] = useState([]);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(response=>
        response.json().then(res=> setTemplates[res.data.meme]));
    },
    []);

    return(
        <div>
            {templates.map(template=>{
                return <img key={template.id} src={template.url} alt={template.name}/>
                }
            )}
        </div>
    )

}
export default Im;



