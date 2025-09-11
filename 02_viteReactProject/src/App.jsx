// hamne yaha pr printname ko tag ki tarah isliye likha tha kyuki react mai jo bhi fucntion ya class jsx return karega vo ek component hoga and component ko likhne ke  liye 2 rules hote hai :
//1. firt letter capital 
//2. written like a tag

//but inside CRA there is only rule that the first letter should be in capital

//jsx should be return inside a container <> and onlky one element can be returned only so to overcome this problem we used <> </> and inside thi we can return multiple jsx -- eg given in the app function
//By using fragments we can return multiple components at same time 

//Running if the code is done by the react and react-dom package in the package.json where react-dom make a dom paraller to the browser -- more on this -- ??


import PrintName from "../src/temp.jsx" 

function App() {
  // how to inject js variable inside the jsx -- any term written inside the {} brackets are assumed as variables and inside the brackets there will be only evaluated expression
  // why we cannot inject expression inside the brackets -- the main reason is that when react create element after creating a tree the last argument we pass it takes it as a variable so it should always be a evaluated expression
  const variable = "rounit singh"
  return (
    <>
      <PrintName />
    {/* PrintName() // now if we are using it inside the html fragment we cannot use it directly but we have to use it inside the tag */}
    <h1>rounit singh, this is from the app function {variable}</h1>


    </>
  )
}

export default App
