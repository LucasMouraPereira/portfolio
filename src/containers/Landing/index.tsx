import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import * as S from './styled'

const Navbar = dynamic(() => import('components/Navbar'));
const Home = dynamic(() => import('containers/Home'));
const About = dynamic(() => import('containers/About'));

const Landing: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default Landing
