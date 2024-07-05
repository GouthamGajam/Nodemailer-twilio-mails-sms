import twilio from "twilio";
import config from "config";

let SID = config.get("SID");
let AUTH = config.get("AUTH");
let PHONE = config.get("PHONE");
const client = twilio (SID , AUTH);

let sensSMS =  async(toNumber, bodyText) =>{
    try {
        const msg = await client.messages.create({
            body:bodyText,
            to:toNumber,
            from: PHONE
        });
        console.log(`Message sent with SID: ${msg.sid}`);
    } catch (error) {
        console.log("Error sending message:",error);
    }
};

sensSMS("+91 7285976509", "Hello send from terminal");