import { Comment, SportsScore } from "@mui/icons-material"
import {
  Avatar,
  Card,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import { PaginationItemProps } from "containers/Pagination"
import { stringToColor } from "utils/color"
import { getHost } from "utils/strings"
import { timeDifferenceToString } from "utils/time"

const ShowView = ({ story }: PaginationItemProps) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }} key={story.id}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: stringToColor(story.by) }}>{story.by[0]}</Avatar>
        </ListItemAvatar>
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
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {`By ${story.by}`}
              </Typography>
              <Typography
                sx={{ display: "inline", ml: 1 }}
                component="span"
                variant="caption"
                color="text.secondary"
              >
                {timeDifferenceToString((story.time as unknown as number) * 1000)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Comment fontSize="medium" />
                <Typography
                  sx={{ display: "inline", ml: 1 }}
                  component="span"
                  variant="body1"
                  color="text.secondary"
                >
                  {story.descendants}
                </Typography>
                <SportsScore fontSize="medium" sx={{ ml: 3 }} />
                <Typography
                  sx={{ display: "inline", ml: 1 }}
                  component="span"
                  variant="body1"
                  color="text.secondary"
                >
                  {story.score}
                </Typography>
              </Box>
            </>
          }
        />
      </ListItem>
    </Card>
  )
}

export default ShowView
