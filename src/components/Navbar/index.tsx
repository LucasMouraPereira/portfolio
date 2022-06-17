import Link from 'next/link'

import { headerProps } from 'utils/types/GlobalTypes'

import { useGlobalContext } from 'contexts/GlobalContext'

import * as S from './styled'

const Navbar = () => {
  const { header }: headerProps = useGlobalContext()
  return (
    <S.Nav>
      <S.Logo>
        <Link href={header.logo.link}>
          <a>{header.logo.name}</a>
        </Link>
      </S.Logo>
      <div>
        <S.Menu>
          {header.menu.map(({ name, link }, index) => (
            <S.ItemMenu key={index}>
              <li>
                <Link href={link}>
                  <a>{name}</a>
                </Link>
              </li>
            </S.ItemMenu>
          ))}
        </S.Menu>
      </div>
    </S.Nav>
  )
}

export default Navbar
