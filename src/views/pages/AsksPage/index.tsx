import { Divider, Typography } from "@mui/material"
import Pagination from "containers/Pagination"
import AskView from "./AskView"

const AsksPage = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ textTransform: "capitalize", display: "flex", alignItems: "center", mb: 3 }}
      >
        Latest Asks
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Pagination storyType="ask" render={AskView} />
    </>
  )
}

export default AsksPage
