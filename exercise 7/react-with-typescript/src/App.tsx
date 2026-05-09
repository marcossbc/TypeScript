
import './App.css'
import ProductCard from './Componant/ProductCard'
import Welcome from './Componant/Welcome'
import UserCard from './UserCard'
// import Welcome from './Componant/Welcome'

function App() {
 

  return (
    <>
    <UserCard name="John Doe" />
    <Welcome username="Jane Doe" isPremium={true} />
    <ProductCard name="Laptop" price={999} description="A high-performance laptop for work and play." />

    </>
  )
}

export default App
