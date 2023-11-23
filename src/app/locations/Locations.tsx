import { useEffect, useState } from 'react'
import { getAllPagesNumber, getLocationsByPage } from '../../axios.client'
import { Location } from '../utils/types'
import BasicPagination from '../../components/pagination/Pagination'
import './locations.scss'

const LocationsComponent = () => {
  const [page, setPage] = useState<number | undefined>(1)
  const [locations, setLocations] = useState<Location[] | undefined>(undefined)
  const [allPages, setAllPages] = useState<number | undefined>(undefined)

  useEffect(() => {
    getAllPagesNumber('location').then((response) => {
      setAllPages(response)
    })
    getLocationsByPage(page).then((response) => {
      const data: Location[] = response.data.results
      setLocations(data)
    })
  }, [page])

  const changePage = (page: number): void => {
    setPage(page)
  }

  return (
    <div className="locations">
      <h1>locations list</h1>
      <BasicPagination count={allPages} callback={changePage} />
      <h3>Current page is {page}</h3>
      <ul className="locations--list">
        {locations ? (
          locations.map((el) => {
            return (
              <li key={el.id}>
                Location: {el.name} Created at: {el.created}
              </li>
            )
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  )
}

export default LocationsComponent
