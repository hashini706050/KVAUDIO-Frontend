import './App.css'
import ProductCard from './components/productCard'


function App() {
  

  return (
    <div className='w-full h-screen flex'>
      <div className='w-[300px] h-full bg-green-200'>
        <button className='w-full h-[40px] text-[25px] font-bold'>
          Dashboard
        </button>
        <button className='w-full h-[40px] text-[25px] font-bold'>
          Items
        </button>
        <button className='w-full h-[40px] text-[25px] font-bold'>
          Reviews
        </button>
        <button className='w-full h-[40px] text-[25px] font-bold'>
         Users
        </button>
      </div>
      <div className='w-full bg-red-900'>
        

      </div>
      
    </div>
      
  
  )
}

export default App
