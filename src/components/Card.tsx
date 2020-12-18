import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maring: 0,
  },
  media: {
    height: 140,
  },
});

type CardProps = {
  card:{
    id:string
    title:string
    content:string
    img:string
  }

}
export default function MediaCard({ card }:CardProps) {
  const classes = useStyles();

  return (
    <Card key={card.id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.img}
          title={card.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
