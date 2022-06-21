import React from "react";
import { withRouter } from "react-router";
import CardDetails from "./CardDetails";

class Card_route extends React.Component {

goToCarddetails = (cardId) => {
    localStorage.setItem("selectedCard", cardId);
    this.props.history.push('/card-details');
// you can manage here to pass the clicked card id to the card details page if needed
}

render() {
    return ( <div>
        <div onClick = {()=>this.goToCarddetails('cardId1')}> card 1 </div>
        <div onClick = {()=>this.goToCarddetails('cardId2')}> card 2 </div>
        <div onClick = {()=>this.goToCarddetails('cardId3')}> card 3 </div>
       </div>
    )
  }
}

export default Card_route;