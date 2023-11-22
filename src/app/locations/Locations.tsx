import { useEffect, useState } from 'react'
import { getAllPagesNumber, getLocationsByPage } from '../../axios.client'
import { Location } from '../utils/types'
import BasicPagination from '../../components/pagination/Pagination'

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
    <div>
      <h2>locations list</h2>
      <BasicPagination count={allPages} callback={changePage} />
      <h3>Current page is {page}</h3>
      <ul>
        {locations ? (
          locations.map((el) => {
            return <li key={el.id}>{el.name}</li>
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  )
}

export default LocationsComponent
