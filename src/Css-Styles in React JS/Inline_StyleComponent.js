import React from 'react'

export default function Inline_StyleComponent() {

     /* yaha h1 tag mai outer curly bracket represent JSX expression & 
     inner curly  bracket represent an object .  */


     // here we create an object for css inline see in <h3> tag
     let obj = {
          color:"blue",
          backgroundColor:"pink",
          textAlign : "center",
          padding : "1.2pc"
          
          
     }

     // here we use spread operator also see <h2> tag below
     let obj1 = {
          fontFamily : "cooper",
          fontSize: "50px",

     }
  return (
    <div>
          
           <h1 style={{color:"red" ,  textAlign:"center" , backgroundColor:"yellow" , marginTop:"2px"}}> 
           Learning Never Ends</h1>

           <h3  style={obj}>Hello Bindiya</h3>

           <h2 style={{...obj , ...obj1}}> Her Her Mahadev</h2>

           <button style={obj} >Click Me</button>

            
    </div>
  )
}
