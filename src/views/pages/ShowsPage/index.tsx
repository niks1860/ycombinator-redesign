import { Divider, Typography } from "@mui/material"
import Pagination from "containers/Pagination"
import ShowView from "./ShowView"

const StoriesPage = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ textTransform: "capitalize", display: "flex", alignItems: "center", mb: 3 }}
      >
        Latest Shows
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Pagination storyType="show" render={ShowView} />
    </>
  )
}

export default StoriesPage
