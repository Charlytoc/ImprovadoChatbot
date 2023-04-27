import Image from 'next/image'
import { Inter } from 'next/font/google'
import Computer from './components/computer'
import CursorWrapper from './components/cursorWrapper'
import Chat from './components/chat'
import { queryParams } from './interfaces/params'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ params }: queryParams) {
  return (<>

  <CursorWrapper>
  <div className='chat-wrapper'>
  <Chat params={params} />
  </div>
  </CursorWrapper>
  </>
  )
}
