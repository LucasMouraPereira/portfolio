import Link from 'next/link'
import Typewriter from 'typewriter-effect'

import { iconsProps } from 'utils/types/GlobalTypes'

import { useGlobalContext } from 'contexts/GlobalContext'

import Linkedin from 'utils/svg/ic-linkedin.svg'
import Github from 'utils/svg/ic-github.svg'
import Codepen from 'utils/svg/ic-codepen.svg'
import Email from 'utils/svg/ic-email.svg'
import Whatsapp from 'utils/svg/ic-whatsapp.svg'

import * as S from './styled'

const Home = () => {
  const { icons }: iconsProps = useGlobalContext()
  const iconsComponents = {
    linkedin: <Linkedin />,
    github: <Github />,
    codepen: <Codepen />,
    email: <Email />,
    whatsapp: <Whatsapp />
  }
  return (
    <S.SectionHome id="home">
      <S.WrapperHome>
        <S.ContentHome>
          <h1>Lucas Moura Pereira</h1>
          <S.Career>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={typewriter => {
                typewriter
                  .typeString('Front-end Web Developer')
                  .pauseFor(2000)
                  .deleteAll()
                  .start()
              }}
            />
          </S.Career>
          <S.WrapperIcons>
            {icons.map(({ slug, name, link, color }, index: any) => (
              <div key={index}>
                <Link href={link}>
                  <a>
                    <S.Icon>{iconsComponents[slug]}</S.Icon>
                    <span>{name}</span>
                  </a>
                </Link>
              </div>
            ))}
          </S.WrapperIcons>
        </S.ContentHome>
      </S.WrapperHome>
    </S.SectionHome>
  )
}

export default Home
