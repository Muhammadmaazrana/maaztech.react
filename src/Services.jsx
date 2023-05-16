import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function Services() {
  return (
    <div>
      <div className='container my-5'>
        <h1 style={{ textAlign: 'center' }}>Our Services</h1>
        <br />
        <div className="main1 ">
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 150 }}
              image="../src/images/pic9.jpg"
              title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../src/images/pic10.jpg"
              title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                App Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../src/images/pic11.jpg"
              title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Software Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent><br />

          </Card></div>
        <div className='main1'>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../src/images/pic12.jpg"
              title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Digital Marketing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../src/images/pic13.jpg"
              title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Online Advertising
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../src/images/pic16.jpg"
              title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Graphic Designing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card>
        </div>
      </div>
    </div>

  );
}
