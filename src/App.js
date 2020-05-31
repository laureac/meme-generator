import React, {useState, useEffect} from 'react';
import './App.scss';


function App(){

  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState(null);
  

  useEffect(()=>{
                  fetch("https://api.imgflip.com/get_memes").then(x=>
                  x.json().then(response=> setTemplates(response.data.memes)));
                },
            []);

  const refresh = () => {
                          window.location.reload()
                        };

     const handleChangeTop= e =>{
      setTopText (e.target.value);
     }
     const handleChangeBottom= e =>{
      setBottomText (e.target.value);
     }                  

      return(
          <div className='App'>
            {meme && <img src={meme} alt='your meme'style={{width: 500}}/>}
            {template && (
            <form className='form' onSubmit = {async e =>{
              e.preventDefault(); 
              try {
                  let username = 'laureeee';
                  let password = '1qaz2wsx';
                  let template_id = template.id;
                  let text0 = topText;
                  let text1 = bottomText;
                  let response = await fetch(`https://api.imgflip.com/caption_image?template_id=${template_id}&username=${username}&password=${password}&text0=${text0}&text1=${text1}`);
                  const meme = await response.json();
                  setMeme(meme.data.url);
                  }
              catch(err)  {
                          console.log(err);
                          }
                        }}>
              <img 
                  src={template.url} style={{width: 250}} 
                  key={template.id}
                  alt={template.name}/>
                <div className='wrapper'>
              <input placeholder='top text'  onChange = {handleChangeTop} />
              <input placeholder='bottom text' onChange = {handleChangeBottom} />
              <div className='btn'>
              <button  type='submit'>submit</button>
              <button  onClick={refresh}>return</button>
              </div>
              </div>
            </form>)}
            
            {!template && <h1>Start with a meme template</h1>}
              {!template &&
              templates.map(template=>{
                  return (<img 
                  style={{width: 200}} 
                  key={template.id} 
                  src={template.url} 
                  alt={template.name}
                  onClick={()=>{setTemplate(template)
                  }}
                />)
                })
              }
          </div>
      )
  
}

export default App;
