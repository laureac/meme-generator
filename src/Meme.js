import React from 'react';
import img1 from './img/41rl0i.jpg'
import img2 from './img/41sj4g.jpg'
import img3 from './img/41w7sh.jpg'

class Meme extends React.Component {
    render(){
    const arr = [img1, img2, img3]
    const number = Math.floor(Math.random() * arr.length);
    let imagemap = arr.map((image)=>{
       return <img src={image} width='25%' height='25%' alt='meme' ></img>
    })

  return (
    <>
    <h1>images</h1>
    {imagemap[number]}
    </>
  );}
}
<Meme />
<button className='generate' onClick={this.renderBtn}>generate meme</button>
export default Meme;