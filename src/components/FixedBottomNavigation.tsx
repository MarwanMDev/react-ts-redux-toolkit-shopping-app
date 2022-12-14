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
import {
  fetchProducts,
  selectAllProducts,
  getProductsError,
  getProductsStatus,
} from '../features/products/productsSlice';
import { useAppDispatch } from '../hooks';
import { useAppSelector } from '../hooks';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

export default function FixedBottomNavigation() {
  const products = useAppSelector(selectAllProducts);
  const status = useAppSelector(getProductsStatus);
  const error = useAppSelector(getProductsError);

  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let content;

  if (status === 'loading') {
    content = <div className="text-center my-5">Loading...</div>;
  } else if (status === 'succeeded') {
    content = products.map((product: any, i: any) => (
      <Grid item xs={12} md={6} lg={3} key={i}>
        <Card
          sx={
            {
              // maxWidth: 345,
              // minHeight: '30rem',
              // maxHeight: '30rem',
            }
          }
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                M
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={product.title}
            subheader={product.category}
          />
          <CardMedia
            component="img"
            height="194"
            image={product.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              {product.price}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              {/* <ShareIcon /> */}
            </IconButton>
            <Button href={'/products/' + product.id} size="small">
              View Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  } else if (status === 'failed') {
    content = (
      <>
        <h1>Products not found</h1>
        <p className="text-center text-danger">{error}</p>
      </>
    );
  }

  return (
    <Box sx={{ p: 7 }} ref={ref}>
      <CssBaseline />
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {content}
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
            console.log(newValue);
          }}
        >
          <BottomNavigationAction
            // component={Link}
            // to="/products/:product"
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
