
import { FacebookIcon } from "@material-ui/icons/Facebook"
import { TwitterIcon } from "@material-ui/icons/Twitter"
import { LinkedinIcon } from "@material-ui/icons/LinkedIn"
import { GithubIcon } from "@material-ui/icons/GitHub"


export default{
    name: 'Tarang Nair',
    title: 'Software Engineer',

    birthday: '29th June 1998',
    contact: '9769712443',
    email: 'tarangnair98@gmail.com',
    address:'3/B, 804, Dreams, Bhandup(W), Mumbai-400078',

    socials : {
        Facebook : {
            link : 'https://www.facebook.com/tarangnair',
            text : 'tarangnair',
            icon : <FacebookIcon/>
        },
        Twitter : {
            link : 'https://twitter.com/tarang90564113',
            text : 'tarang',
            icon : <TwitterIcon/>
        },
        Linkedin : {
            link : 'https://www.linkedin.com/in/tarang-nair-752aa8179/',
            text : 'tarang',
            icon : <LinkedinIcon/>
        },
        Github : {
            link : 'https://github.com/tarang1998',
            text : 'tarang1998',
            icon : <GithubIcon/>
        }
    }



}