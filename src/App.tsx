import Header from './components/Header'
import Box from './components/Box'
import { Separator } from "@/components/ui/separator"


function App() {


  let myBox = {
    author: "Jane Doe",
    title: "My Novel",
    outletName: "XYZ Books",
    genre: "Mystery",
    publicationDate: 'april 8',
    image: '25.99',
    link: 'url'
  };


  return (
    <div>
      <Header />
      <Separator className='bg-yellow-600'/>
      <div className='
      flex flex-col items-center justify-center
      '>
        <Box {...myBox} />
      </div>
    </div>
  )
}

export default App
