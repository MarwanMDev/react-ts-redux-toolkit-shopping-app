import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { GetProductsResponse, Product } from '../types';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
} from '@mui/material';

export default function FixedBottomNavigation() {
  async function getProducts() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetProductsResponse>(
        'https://fakestoreapi.com/products?limit=26',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      // console.log(JSON.stringify(data, null, 4));
      // // 👇️ "response status is: 200"
      // console.log('response status is: ', status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [products, setProducts] = React.useState<[] | null>(null);

  React.useEffect(() => {
    getProducts().then((res: any) => {
      setProducts(res);
      console.log(res);
    });
  }, []);

  return (
    <Box sx={{ p: 7 }} ref={ref}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        >
          {products?.map(
            (
              { title, price, description, category, image, rating },
              index
            ) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    minHeight: '30rem',
                    maxHeight: '30rem',
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: 'red' }}
                        aria-label="recipe"
                      >
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={title}
                    subheader={rating.rate}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ overflow: 'hidden' }}
                    >
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      {/* <ShareIcon /> */}
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Archive"
            icon={<ArchiveIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
