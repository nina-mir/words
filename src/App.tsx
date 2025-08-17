import Header from './components/Header'
import Box from './components/Box'
import Footer from './components/Footer'
// import { Separator } from "@/components/ui/separator"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import data from '@/data/list.json'

import { Routes, Route, useLocation } from 'react-router-dom'
import Bio from '@/components/pages/Bio'
import Obsessions from '@/components/pages/Obsessions'


function App() {

  let boxes = data.map((item) => {
    return <Box key={item.id} {...item} />
  })

  const location = useLocation()
  const isAuthPage = location.pathname === '/words/obsessions'
  const isBioPage = location.pathname === '/words/bio'
  console.log('pathname : ', location.pathname)

  return (
    <div className='flex flex-col  dark:bg-amber-900'>
      {/* <DarkModeTest/> */}
      {!isAuthPage && !isBioPage && <Header />}

      {/* <Separator className='bg-yellow-600 dark:bg-yellow-400' /> */}

      <main className='flex-grow'>
        <Routes>
          <Route path='/words/bio' element={<Bio />}></Route>
          <Route path='/words/obsessions' element={<Obsessions />}></Route>
        </Routes>
      </main>

      <div className='
      flex flex-col items-center justify-center 
      '>
        <div className='flex flex-col w-full gap-5'>
          <div className='break-auto hyphens-auto  dark:[*:not(h2)]:text-white dark:text-shadow-sky-400'>
            <div className='dark:text-inherit h-[2rem] bg-pink-500 mb-[2rem]'>

              <h2 className='dark:text-black px-1 mr-[10%] text-5xl font-p22 items-start mb-[1rem]'>
                Current
              </h2>
            </div>
            <div className='w-[85%] text-lg font-mono mb-[1rem] ml-[2rem]'>
              <em>Taschen-Dolmetscher.Revisited</em><br />
              <span className={`
            font-header 
            bg-amber-300
            dark:bg-neutral-500
            dark:text-shadow-sky-400
            w-fit
            rounded-4xl
            dark:px-2
            px-1.5
            
            `}>[multi-media, web-game]</span>
              <br />A linguistic and historical journey through WW2 German-Russian phrases as a language learning game&nbsp;
              <span className='font-semibold'>prompted by</span>
              <ul>
                <li className='list-inside list-disc'>Wehrmacht-issued Russian translation booklet&nbsp;
                  <span className='border-b-2 border-b-yellow-300'>
                    <a href='https://www.buchfreund.de/de/d/p/111627405/taschen-dolmetscher-fuer-frontsoldaten-russisch'>
                      "Taschen-Dolmetscher für Frontsoldaten - Russisch (1941)"
                    </a>
                  </span>
                </li>
              </ul>
              and <span className='font-semibold'>inspired by</span>
              <ul>
                <li className='list-inside list-disc'>Ilya Ehrenburg & Vasily Grossman's words from
                  the Eastern Front (1941-1945)
                </li>
                <li className='list-inside list-disc'>Artwork made by Soviet/Jewish partisans & survivors/witnesses of Holocaust</li>
                <li className='list-inside list-disc'>The heroic/forgotten sacrifices of ordinary Soviet citizens in the face of the monstrous savagery of the German occupiers and the incompetency of Stalin</li>
              </ul>
            </div>
            <div className='font-mono flex flex-col items-center gap-2 w-full'>
              <a
                className=' 
                         
                font-semibold bg-pink-500 rounded-4xl p-1 w-70 text-center
                inset-shadow-xs
                hover:bg-pink-600
                inset-shadow-pink-500'
                href='https://nina-mir.github.io/taschen-dolmetcher/'>
                check it out 🔗
              </a>
              <p className='
              inset-shadow-xs
              inset-shadow-pink-500
              hover:bg-pink-600
              font-semibold bg-pink-500 rounded-4xl p-1 w-70 text-center'>
                <a 
                href='https://github.com/nina-mir/taschen-dolmetcher'>
                  contribute to the project <GitHubLogoIcon className='inline-block w-5 h-auto' />
                </a>
              </p>
            </div>
          </div>
          <div className='h-[2rem] bg-pink-400 mb-[2rem]'>
            <h2 className='pl-1 mr-[10%] text-5xl font-p22 items-start mb-[1rem]'>Publications</h2>
          </div>
        </div>
        {boxes}
      </div>
      <Footer />



    </div>
  )
}

export default App
