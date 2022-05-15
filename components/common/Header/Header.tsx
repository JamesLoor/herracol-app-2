import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// Config
import { Wrapper } from '@config/themeConfig'

// Components
import { Navbar, SearchBar } from '@components/common'

// Icons
import { Menu, User, Heart, Cart, Close, Logo } from '@components/icons'

// Hooks
import useUi from '@hooks/useUi'

const HeaderStyled = styled.header<StyledProps>`
  position: fixed;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: ${({ theme }) => theme.positions.header};
  background: ${({ theme }) => theme.colors.secundary};

  .header__mainContainer {
    display: grid;
    grid-template-areas:
      "logo buttons"
      "searchBar searchBar";
    grid-template-columns: 1fr 1frs;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    gap: 5px
  }

  .header__logo {
    grid-area: logo;
  }

  .header__buttons {
    grid-area: buttons;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 15px;
  }

  .header__button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  .header__searchBar {
    grid-area: searchBar;
  }

  @media (min-width: 1024px) {
    .header__mainContainer {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        "logo searchBar buttons";
    }

    .header__buttons {
      justify-self: flex-end;
    }

    .menu {
      display: none;
    }
  }
`

type StyledProps = {
  isSidebarOpen: boolean
}

const Header: React.FC = () => {
  const { isSidebarOpen, toogleSidebar } = useUi()
  return (
    <HeaderStyled isSidebarOpen={isSidebarOpen}>
      <Wrapper>
        <div className="header__mainContainer">
          <div className="header__logo">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>

          <SearchBar className="header__searchBar" />

          <div className="header__buttons">
            <button onClick={() => console.log('User')} className="header__button">
              <Cart />
            </button>
            <button onClick={() => console.log('User')} className="header__button">
              <Heart />
            </button>
            <button onClick={() => console.log('User')} className="header__button">
              <User />
            </button>
            <button onClick={() => toogleSidebar(isSidebarOpen)} className="header__button menu">
              <Menu />
            </button>
          </div>

          {/* <Navbar /> */}
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header