import Twilio from "twilio-client";
import React from "react";

class Phone  {
    constructor(props){
        super(props);
        this.HandleOnClick = this.HandleOnClick.bind(this);
        this.getCallDetails = this.getCallDetails.bind(this);
    }
    HandleOnClick = (e) => {
        this.props.onButtonClick(this.props.name);
    }
    makeCall = (e) =>{
        const device = new Twilio.Device();
        device.setup(authToken);
        var connection = device.connect({
            phone: '+37477409700'
        });
        device.on('connect',this.getCallDetails);
    } => returns call object or error
    Call Answer, Decline
    getCallDetails = (e) =>{
        console.log(e);
    }
    render() {
        return( <div>{this.makeCall()}</div>);
    }
}
export default Phone;