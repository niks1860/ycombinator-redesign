import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import Pagination from "containers/Pagination"
import { useState } from "react"
import StoriesView from "./StoriesView"

type NewsType = "top" | "new" | "best"

const StoriesPage = () => {
  const [category, setCategory] = useState<NewsType>("new")

  const handleCategoryChange = (e: SelectChangeEvent<NewsType>) => {
    setCategory(e.target.value as NewsType)
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "capitalize", display: "flex", alignItems: "center" }}
        >
          {`${category} stories`}
        </Typography>
        <FormControl sx={{ minWidth: 160 }} variant="standard">
          <InputLabel id="story-page-category-label">Filter</InputLabel>
          <Select
            label="Filter"
            value={category}
            onChange={handleCategoryChange}
            labelId="story-page-category-label"
          >
            <MenuItem value="top">Top</MenuItem>
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="best">Best</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Pagination storyType={category} render={StoriesView} />
    </>
  )
}

export default StoriesPage
