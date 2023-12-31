export interface RickMortyState {
  characters: Character[]
  page: number
  allPages: number | undefined
  isLoading: boolean
  error: string | null
}

export interface ChangePage {
  (updatedPage: number): void
}

export type Characters = {
  info: Info
  results: Character[]
}

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export type Info = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type Location = {
  name: string
  url: string
  id?: number
  type?: string
  dimension?: string
  residents?: string[]
  created?: string
}

export type Origin = {
  name: string
  url: string
}

export type Locations = {
  info: Info
  results: Location[]
}
