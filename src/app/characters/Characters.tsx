import { Component } from 'react'
import { RickMortyState } from '../utils/types'
import BasicPagination from '../../components/pagination/Pagination'
import { fetchCharactersByPage, getAllPagesNumber } from '../../axios.client'
import './characters.scss'

class RickAndMortyCharacters extends Component<object, RickMortyState> {
  constructor(props: object) {
    super(props)
    this.state = {
      characters: [],
      page: 1,
      allPages: undefined,
      isLoading: true,
      error: null,
    }
    this.changePage = this.changePage.bind(this)
  }

  async componentDidMount() {
    try {
      const allPages = await getAllPagesNumber('character')
      const characters = await fetchCharactersByPage(this.state.page)
      this.setState({
        characters,
        allPages,
        isLoading: false,
      })
    } catch (error) {
      this.setState({
        error: 'Error loading characters',
        isLoading: false,
      })
      console.error(error)
    }
  }

  async componentDidUpdate() {
    try {
      const characters = await fetchCharactersByPage(this.state.page)
      this.setState({
        characters,
        isLoading: false,
      })
    } catch (error) {
      this.setState({
        error: 'Error loading characters',
        isLoading: false,
      })
      console.error(error)
    }
  }

  changePage(updatedPage: number): void {
    this.setState({
      page: updatedPage,
    })
  }

  render() {
    const { characters, allPages, page, isLoading, error } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>{error}</div>
    }

    return (
      <div className="characters">
        <h1>Rick and Morty Characters</h1>
        <BasicPagination count={allPages} callback={this.changePage} />
        <h3>Current page is: {page}</h3>
        <ul className="characters--list">
          {characters.map((character) => (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <div>{character.name}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RickAndMortyCharacters
