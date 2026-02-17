import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton.jsx'
import ProductCard from './components/ProductCard.jsx'
import Category from './components/Category.jsx'



function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const myProds = [
    {
    "img": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfDJ8MHx8fDA%3D",
    "title" : "Subglass",
    "description" : "Black",
    "price" : "$100",
    "category": "fashion",
  },
  {
    "img": "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfDJ8MHx8fDA%3D",
    "title" : "Purse",
    "description" : "Wooden",
    "price" : "$200",
    "category": "fashion"
  },
  {
    "img": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfDJ8MHx8fDA%3D",
    "title" : "Toy",
    "description" : "Car",
    "price" : "$300",
    "category": "toys"
  },
  {
    "img": "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3R8ZW58MHwyfDB8fHww",
    "title" : "Headphone",
    "description" : "Great Sound",
    "price" : "$350",
    "category": "electronics"
  },
  {
    "img": "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHwyfDJ8MHx8fDA%3D",
    "title" : "Shoes",
    "description" : "Black",
    "price" : "$400",
    "category": "fashion"
  },
  {
    "img": "https://images.unsplash.com/photo-1581191853005-15f8b24f6302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHwyfDB8fHww",
    "title" : "Coffee",
    "description" : "Coffee",
    "price" : "$500",
    "category": "food"
  },
  {
    "img": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfDJ8MHx8fDA%3D",
    "title" : "Subglass",
    "description" : "Black",
    "price" : "$100",
    "category": "fashion",
  },
  {
    "img": "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfDJ8MHx8fDA%3D",
    "title" : "Purse",
    "description" : "Wooden",
    "price" : "$200",
    "category": "fashion"
  },
  {
    "img": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfDJ8MHx8fDA%3D",
    "title" : "Toy",
    "description" : "Car",
    "price" : "$300",
    "category": "toys"
  },
  {
    "img": "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3R8ZW58MHwyfDB8fHww",
    "title" : "Headphone",
    "description" : "Great Sound",
    "price" : "$350",
    "category": "electronics"
  },
  {
    "img": "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHwyfDJ8MHx8fDA%3D",
    "title" : "Shoes",
    "description" : "Black",
    "price" : "$400",
    "category": "fashion"
  },
  {
    "img": "https://images.unsplash.com/photo-1581191853005-15f8b24f6302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHwyfDB8fHww",
    "title" : "Coffee",
    "description" : "Coffee",
    "price" : "$500",
    "category": "food"
  }
]

  const categories = ['all', ...new Set(myProds.map(prod => prod.category))];
  const filteredProds = selectedCategory === 'all' ? myProds : myProds.filter(prod => prod.category === selectedCategory);
  return (
    <div>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{height: '30px', marginTop: '20px'}}>
        {categories.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
      </select>
      <div style={{display: 'flex'}}>
        {filteredProds.map((prod) => <ProductCard {...prod} />)}
      </div>
    </div>
  )
}

export default App


//create a replica of amazon.com home page or product page
//create a page to display and selected page side by side (pos)