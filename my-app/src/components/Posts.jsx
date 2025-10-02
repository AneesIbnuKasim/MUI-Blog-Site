import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'




function Posts() {
  return (
    <>
    {
      post.map(item=>(
        <Card  >
      <CardHeader
        avatar={
          <Avatar src={item.userSrc}  aria-label="recipe" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="400"
        image={item.cardSrc}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.cardBody}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </ CardActions>
    </Card>
      ))
    }
    </>
    
  )
}


const post = [{
  no:1,
  title:'first ever post',
  userSrc:'https://randomuser.me/api/portraits/men/75.jpg',
  username:'john',
  cardSrc:'https://picsum.photos/200/300?random=22',
  cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
},
{
  no:2,
  title:'second post',
  userSrc:'https://randomuser.me/api/portraits/men/5.jpg',
  username:'david lay',
  cardSrc:'https://picsum.photos/200/300?random=11',
  cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
},
{
  no:3,
  title:'third post',
  userSrc:'https://randomuser.me/api/portraits/men/25.jpg',
  username:'dimitri',
  cardSrc:'https://picsum.photos/200/300?random=13',
  cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
},
{
  no:4,
  title:'fourth post',
  userSrc:'https://randomuser.me/api/portraits/men/44.jpg',
  username:'juan ivan',
  cardSrc:'https://picsum.photos/200/300?random=18',
  cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
},
{
  no:5,
  title:'fifth post',
  userSrc:'https://randomuser.me/api/portraits/men/15.jpg',
  username:'nimaan hil',
  cardSrc:'https://picsum.photos/200/300?random=30',
  cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
},]

export default Posts
