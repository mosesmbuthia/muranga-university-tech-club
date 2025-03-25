import { use } from "react";
import cyberImg from "../../src/assets/images/cyber-security.jpg";
import userInterface from "../../src/assets/images/user-inteface.jpg";
import webdevImg from "../../src/assets/images/webdev.jpg";
import mobiledevImg from "../../src/assets/images/mobiledev.png";
import cloudImg from "../../src/assets/images/cloud.jpg";
import powerImg from "../../src/assets/images/power.jpg";



export interface EventProps {
    title: string;
    organizer: string;
    time: string;
    location: string;
    image: string;
  }
  
  export const eventsData: EventProps[] = [
    { 
      title: "Cyber Security", 
      organizer: "Webster Ifedha", 
      time: "every Monday from 4 PM to 7 PM", 
      location: "Computer Lab F04", 
      image: cyberImg
    },
    { 
      title: "UI/UX", 
      organizer: "Manase Gunga", 
      time: "every Tuesday from 5 PM to 8 PM", 
      location: "Computer Lab F04", 
      image: userInterface 
    },
    { 
      title: "Web Development", 
      organizer: "Carolyne Githenduka", 
      time: "every Wednesday from 6 PM to 9 PM", 
      location: "Computer Lab F04", 
      image: webdevImg 
    },
    { 
      title: "Mobile Apps Development", 
      organizer: "Stanley Amunze", 
      time: "every Thursday from 4 PM to 7 PM", 
      location: "Computer Lab F04", 
      image: mobiledevImg 
    },
    { 
      title: "Cloud Engineering", 
      organizer: "Paul Karanja", 
      time: "every Friday from 3 PM to 6 PM", 
      location: "Computer Lab F04", 
      image: cloudImg 
    },
    { 
      title: "Power Platform", 
      organizer: "Evyonn Mbithe", 
      time: "every Saturday from 1 PM to 4 PM", 
      location: "Computer Lab F04", 
      image: powerImg 
    }
  ];
  