import { Divider, Typography } from "@mui/material"
import Pagination from "containers/Pagination"
import jobView from "./JobsView"

const StoriesPage = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ textTransform: "capitalize", display: "flex", alignItems: "center", mb: 3 }}
      >
        Latest Jobs
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Pagination storyType="job" render={jobView} />
    </>
  )
}

export default StoriesPage
