import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../image/image.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Little Ride"
          imgage src={image} style={{width: "100%", height: "auti"}}
          title="Ride a little better"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Ride a little better
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Little Cab is a fully owned taxi hailing technology of Craft Silicon Ltd, a Kenyan company based
in Westlands, Nairobi. It is a mobile phone app automated transport solution offered on the go for
consumers and corporate clients. Safaricom is partnering with Little Cab to provide the technology
platform on which the app operates. It has registered taxi operators within the country with initial roll out
in Nairobi.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
         <a href="https://www.little.bz/ke/"> Learn More</a>
        </Button>
      </CardActions>
      
    </Card>
  );
}
