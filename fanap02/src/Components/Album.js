import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'
import data from '../data.json'
import { red } from '@material-ui/core/colors'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import moment from 'moment'

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '66.25%' // 16:970.25%;70.25%;
  },
  cardContent: {
    flexGrow: 1
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '66.25%' // 16:9
  }
})
class Album extends React.Component {
  constructor () {
    super()
    this.state = {
      id: 0,
      title: '',
      description: ''

    }
  }

  render () {
    console.log(moment().format('MMMM Do YYYY'))
    const { classes } = this.props
    return (
      <>
        {(() => {
          if (this.state.id === 0) {
            return (
              <>
                <CssBaseline />
                <AppBar position='relative'>
                  <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant='h6' color='inherit' noWrap>
                              Mahdi Shahabizadeh Album
                    </Typography>
                  </Toolbar>
                </AppBar>
                <main>
                  <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                      {data.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                            <CardHeader
                              style={{ textAlign: 'left' }}
                              avatar={
                                <Avatar aria-label='recipe' className={classes.avatar}>
                                          R
                                </Avatar>
                              }
                              title={card.title}
                              subheader={moment().format('MMMM Do YYYY')}
                            />
                            <CardMedia
                              className={classes.media}
                              image={'/postImages/'+card.id+'.png'}
                              title='Paella dish'
                            />
                            <CardContent className='CardDes'>
                              <Typography variant='body2' color='textSecondary' component='p'>
                                {card.description}
                              </Typography>
                            </CardContent>
                            <Link
                              className='READMORE'
                              component='button'
                              variant='body2'
                              onClick={() => {
                                this.setState({ id: card.id })
                                this.setState({ title: card.title })
                                this.setState({ description: card.description })
                              }}
                            >
                                      READ MORE
                            </Link>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                </main>
              </>)
          } else {
            return (
              <div>
                <CssBaseline />
                <AppBar position='relative'>
                  <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant='h6' color='inherit' noWrap>
                      READ MORE ITEM {this.state.id}
                    </Typography>
                  </Toolbar>
                </AppBar>
                <div className='ReadmoreContainer'>
                  <section className='CustomHeader'>
                    {this.state.title}
                    <span style={{ display: 'block' }}>{moment().format('MMMM Do YYYY')}</span>
                  </section>
                  <section className='ImageHolder'>
                    <img style={{ width: '100%' }} src={'/postImages/'+this.state.id+'.png'} />
                  </section>
                  <section className='DescriptionHolder'>
                    {this.state.description}
                  </section>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                      this.setState({ id: 0 })
                    }}
                  >
                          BACK TO ALBUM
                  </Button>
                </div>
              </div>
            )
          }
        })()}
      </>
    )
  }
}
export default withStyles(styles, { withTheme: true })(Album)
