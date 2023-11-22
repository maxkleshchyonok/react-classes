import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { ChangePage } from '../../app/utils/types'

const BasicPagination = ({
  count,
  callback,
}: {
  count: number | undefined
  callback: ChangePage
}) => {
  const handleChange = (e: object, p: number) => {
    console.log(e, p)
    callback(p)
  }

  return (
    <Stack spacing={2}>
      <Pagination onChange={handleChange} count={count} color="primary" />
    </Stack>
  )
}

export default BasicPagination
