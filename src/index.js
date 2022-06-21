import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header, Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Movies from "./components/Movies/Movies";



function App() {

   // we would want to initialise this from config 
   const [cards_per_page] = useState(12)

   return (
   
      <Segment textAlign="center">
         <Header as="h2" icon textAlign="center">
            <Icon name="film" />
            <Header.Content>Several films</Header.Content>
         </Header>
         
         <Movies 
            num_display_results={cards_per_page}
         />
            
      </Segment>
   )
}


ReactDOM.render(<App />, (document.querySelector("#root")));
