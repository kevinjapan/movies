/*
#rradar interview test - working notes

1. This solution assumes users can click on a button to remove their 'vote' and thus return to a neutral status
2. 'like' and 'dislike' are mutually exclusive

*/

import React, { useState } from "react"
import "../../index.css";
import {  Icon, Button, Card, Image } from "semantic-ui-react";
import { display_currency } from "../currencies/currencies"



const MovieCard = props => {

   // card has three user-voted states : [neutral,like,dislike]
   const [user_vote,setUserVote] = useState("neutral")


   const change_card_status = (new_vote) => {

      // if user is removing vote, set to neutral
      if(new_vote === user_vote) {
         setUserVote('neutral')
      }
      else {
         setUserVote(new_vote)
      }
   }

   return (
      
      <Card className="centered">

         <Card.Content>
            <Image floated="right" size="tiny" src={props.img} />
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta> {props.tagline}</Card.Meta>
            <Card.Description>{props.release_date}</Card.Description>
         </Card.Content>

         <Card.Content>
            <Card.Description> Budget: {display_currency(props.budget,'en-US')}</Card.Description>
         </Card.Content>

         <Card.Content extra>
            <div className="ui two buttons">
               <Button 
                  basic={user_vote === 'like' ? false : true}
                  primary={user_vote === 'like' ? true : false}
                  onClick={event => change_card_status('like')}>
                     <Icon name="thumbs up" />
                     Like
               </Button>
               <Button 
                  basic={user_vote === 'dislike' ? false : true}
                  primary={user_vote === 'dislike' ? true : false}
                  onClick={event => change_card_status('dislike')}>
                     <Icon name="thumbs down" />
                     Dislike
               </Button>
            </div>
         </Card.Content>

      </Card>
   )
}

export default MovieCard