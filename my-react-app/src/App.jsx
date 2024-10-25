import Header from './Header.jsx'
import List from './List.jsx'
import Footer from './footer.jsx'
import Body from './Body.jsx'
import Card from './Card/Card.jsx'
import Button from './Button.jsx'
//import Greeting from './userGreeting/userGreeting.jsx'
import Greeting from './Greeting.jsx'

function App() {
  const fruits = [
                  {id:1,name:"apple",calories:95},
                  {id:2,name:"orange",calories:45},
                  {id:3,name:"banana",calories:105},
                  {id:4,name:"coconut",calories:159},
                  {id:5,name:"pineapple",calories:37}
                ]

  const vegetables = [
                      {id:6,name:"potatoes",calories:110},
                      {id:7,name:"celery",calories:15},
                      {id:8,name:"carrots",calories:25},
                      {id:9,name:"corn",calories:63},
                      {id:10 ,name:"brocoli",calories:50}
                    ]

  return (
    <>
      <Header/>
      <Button/>
      <Greeting isLoggedIn={true} username="Chocs"/>
      <Card name="Kelvin Mwenda" text="A 21 year old Tech enthusiast" profilePic="./src/assets/Kelvin.jpg"/>
      <Card name="Eliud Marierie" text="A young web developer" profilePic="./src/assets/Eliud1.jpg"/>
      <Card name="Sharon Nyaboke" text="A young beautiful fashion stylist." profilePic="./src/assets/Sharon.jpg"/>
      <Card />
      <Body/>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
      <List />
      <Footer/>
    </>
  )
}

export default App
