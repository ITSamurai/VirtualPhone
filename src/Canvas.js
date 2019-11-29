import React from "react";
import TwilioClient from "twilio-client";
const accountSid = 'ACd178723f0915fdcb9481aa8d0eacc8e7';
const authToken = 'c838a576a48f36810591b1799be0f3c8';
const app_sid = 'APb349bff706541055fff06f42d08f4a08'
class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.HandleOnClick = this.HandleOnClick.bind(this);
        this.getCallDetails = this.getCallDetails.bind(this);
        this.state = {capabilityToken:null};
    }
    async componentDidMount(){
        const response = await fetch('http://127.0.0.1:1337/token/');
        const token = await response.text();
        this.setState({capabilityToken:token});
    }

    HandleOnClick = (e) => {
        this.props.onButtonClick(this.props.name);
    }
    makeCall = (e) =>{
        const device = new TwilioClient.Device;
        console.log('token',this.state.capabilityToken);
        device.setup(this.state.capabilityToken);
        device.on('ready',function(device){
            var connection = device.connect({
                 CallerId:'+12025172149',
                 PhoneNumber:'+37477409700'
             });

            console.log("Twilio.Device is ready for connection");
        })

        //device.on('connect',this.getCallDetails);
    }
    getCallDetails = (e) =>{
        console.log(e);
    }
    render() {
        if(this.state.capabilityToken!=null){
            return( <div>hello {this.makeCall()}</div>);
        }else{
            return (<div>"Loading"</div>);
        }

    }
}
export default Canvas;