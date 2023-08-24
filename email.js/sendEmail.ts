import emailjs from '@emailjs/browser';
import emailConfig from './config';

type Props = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

const { serviceId, templateId, publicKey } = emailConfig;


export default async function sendEmail(templateParams: Props): Promise<string> {
    return new Promise((resolve, reject) => {
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                resolve(response.text);
            })
            .catch(function (error) {
                console.log('FAILED...', error);
                reject(error.text);
            });
    });
}