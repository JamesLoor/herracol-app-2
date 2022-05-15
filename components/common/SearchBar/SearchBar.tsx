import * as React from 'react'
import styled from 'styled-components'

// Icons
import { Search } from '@components/icons'

type Props = {
  className?: string
}

const SearchBarStyled = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr max-content;
  height: 42px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  background-color: ${({ theme }) => theme.colors.secundary};

  .search__input {
    width: 100%;
    height: 20px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`

const SearchBar: React.FC<Props> = ({ ...props }) => {
  return (
    <SearchBarStyled { ...props }>
      <input className="search__input" placeholder="Buscar..." type="text" />
      <Search className="search__icon" width="20" height="20" />
    </SearchBarStyled>
  )
}

export default SearchBar
