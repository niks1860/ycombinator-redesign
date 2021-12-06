import { Card, Link, ListItem, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { PaginationItemProps } from "containers/Pagination"
import { getHost } from "utils/strings"
import { timeDifferenceToString } from "utils/time"

const jobView = ({ story }: PaginationItemProps) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }} key={story.id}>
      <ListItem key={story.id} alignItems="flex-start">
        <ListItemText
          primary={
            <>
              <Link
                variant="h6"
                href={story.url}
                color="text.primary"
                underline="none"
                target="_blank"
                rel="norefferer"
              >
                {story.title}
              </Link>
              <Typography
                sx={{ display: "inline", ml: 1 }}
                variant="body2"
                component="span"
                color="text.secondary"
              >
                {getHost(story.url)}
              </Typography>
            </>
          }
          secondary={
            <Box sx={{ display: "block" }}>
              <Typography component="span" variant="caption" color="text.secondary">
                {timeDifferenceToString((story.time as unknown as number) * 1000)}
              </Typography>
            </Box>
          }
        />
      </ListItem>
    </Card>
  )
}

export default jobView
