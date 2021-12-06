import {
  CircularProgress,
  Container,
  List,
  MenuItem,
  Pagination as MuiPagination,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { getStoryIdsAction, getViewAction } from "redux/actions/Stories"
import { StoreState } from "redux/reducers"
import { Story, StoryType } from "services/APIService"

export interface PaginationItemProps {
  story: Story
}

interface Props {
  storyType: StoryType
  render: (props: PaginationItemProps) => JSX.Element
  idSet: ReturnType<typeof mapStateToProps>["idSet"]
  viewSet: ReturnType<typeof mapStateToProps>["viewSet"]
  items: ReturnType<typeof mapStateToProps>["items"]
  getIds: (type: StoryType) => void
  getView: (type: StoryType, ids: string[]) => void
}

const Pagination = ({ idSet, viewSet, getIds, getView, storyType, render }: Props) => {
  const ids = idSet[storyType].data
  const view = viewSet[storyType].data
  const isLoading = idSet[storyType].loading || viewSet[storyType].loading

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  useEffect(() => {
    getIds(storyType)
  }, [storyType])

  useEffect(() => {
    setPage(1)
    getView(storyType, ids.slice(0, pageSize))
  }, [idSet])

  useEffect(() => {
    const start = (page - 1) * pageSize
    getView(storyType, ids.slice(start, start + pageSize))
  }, [page, pageSize])

  const handlePageChange = (_: any, value: number) => {
    setPage(value)
  }

  const handlePageSizeChange = (e: SelectChangeEvent<number>) => {
    setPageSize(parseInt(`${e.target.value}`))
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Container sx={{ maxWidth: "lg", textAlign: "center", pl: 0, pr: 0 }}>
        {isLoading ? (
          <CircularProgress sx={{ mt: 5, mb: 5 }} />
        ) : (
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {view.map((story) => render({ story }))}
          </List>
        )}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
            Items per page:
          </Typography>
          <Select
            value={pageSize}
            onChange={handlePageSizeChange}
            size="small"
            sx={{ ml: 2, mr: 5 }}
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="35">35</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </Select>
          <MuiPagination
            count={Math.ceil(ids.length / pageSize)}
            page={page}
            onChange={handlePageChange}
            disabled={isLoading}
            showFirstButton
            showLastButton
          />
        </Box>
      </Container>
    </Box>
  )
}

const mapStateToProps = (state: StoreState) => ({
  idSet: state.stories.ids,
  viewSet: state.stories.views,
  items: state.stories.items,
})

const mapDispachToProps = (dispach: Dispatch) => ({
  getIds: (type: StoryType) => dispach(getStoryIdsAction(type)),
  getView: (type: StoryType, ids: string[]) => dispach(getViewAction(type, ids)),
})

export default connect(mapStateToProps, mapDispachToProps)(Pagination)
