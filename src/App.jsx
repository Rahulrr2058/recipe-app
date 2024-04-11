import { useState } from 'react'
import Search from './components/search'
import FoodList from './components/Foodlist';
import Nav from './components/Nav';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';
import "./App.css"
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId]= useState("715497")
  return (
   
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList  setFoodId ={setFoodId}foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
      
      
    </div>
  )
}

export default App
