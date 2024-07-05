import nodemailer from "nodemailer";
import config from "config";

let HOST = config.get("HOST");
let PORT = config.get("PORT");
let USER = config.get("USER");
let PASS = config.get("PASS");

let sendEmail = async(myEmails,text,subject,attachments,htmlContent)=>{
    try {
        let transporter = nodemailer.createTransport({
            host: HOST,
            port: PORT,
            secure: false,
            auth:{
                user: USER,
                pass: PASS,
            },
        });

        let info = transporter.sendMail({
            from:`Sending from terminal ${USER}`,
            to: myEmails,
            subject: subject,
            text:text,
            html: htmlContent,
            attachments: attachments
        });
        console.log("Email Sent");
    } catch (error) {
        console.log(error);
    }
};

const myEmails = ["ggajam@gitam.in", "yashwantff001@gmail.com", "suhail@tworks.in", "vpsbattamsetty@gmail.com","goutham@tworks.in"];
const attachments = [

];
const text = "This email is send from terminal \n I am Goutham Kumar";
const subject = "GGK";

sendEmail(myEmails,text,subject);