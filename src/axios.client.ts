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

export async function getAllPagesNumber(endpoint: string): Promise<number> {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/${endpoint}`
    )
    return response.data.info.pages
  } catch (error) {
    throw new Error('Error loading pages number')
  }
}

export async function getLocationsByPage(page: number | undefined) {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location/?page=${page}`
    )
    return response
  } catch (error) {
    throw new Error('Error loading characters')
  }
}
