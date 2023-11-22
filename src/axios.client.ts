import axios from 'axios'

export async function fetchCharactersByPage(page: number) {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    return response.data.results
  } catch (error) {
    throw new Error('Error loading characters')
  }
}

export async function getAllPagesNumber() {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character'
    )
    return response.data.info.pages
  } catch (error) {
    throw new Error('Error loading pages number')
  }
}
