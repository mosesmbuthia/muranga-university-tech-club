

import ndiaImg from "../assets/images/ndia.jpg";
import muhariImg from "../assets/images/muhari.jpg";
import bridgetImg from "../assets/images/bridget.jpg";
import njeriImg from "../assets/images/njeri.jpg";
import mutisyaImg from "../assets/images/mutisya.jpg";
import websterImg from "../assets/images/webster.jpg";
import manaseImg from "../assets/images/manase.jpg";
import carolImg from "../assets/images/carol.jpg";
import evvonImg from "../assets/images/evvon.jpg";
import paulImg from "../assets/images/paul.jpg";
import stanleyImg from "../assets/images/stanley.jpg"

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. John Ndia",
    position: "Patron",
    bio: "Dr. John Ndia is an experienced mentor dedicated to empowering students with technical and leadership skills.",
    image: ndiaImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Victory Njeri",
    position: "Chairperson",
    bio: "Victory Njeri is a visionary leader fostering collaboration and innovation among students in the tech club.",
    image: njeriImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Allan Muhari",
    position: "Vice Chairperson",
    bio: "Allan Muhari is committed to promoting technical excellence and teamwork in the club.",
    image: muhariImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Bridget Gitonga",
    position: "Secretary",
    bio: "Bridget Gitonga ensures the club runs efficiently by keeping detailed records and organizing meetings.",
    image: bridgetImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ruth Mutisya",
    position: "Treasurer",
    bio: "Ruth Mutisya manages the club’s finances to ensure smooth operations and funding for projects.",
    image: mutisyaImg,
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Webster Ifedha",
    position: "Cyber Security Lead",
    bio: "Webster Ifedha is a cybersecurity enthusiast ensuring digital safety and security within the club.",
    image: websterImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Manase Gunga",
    position: "UI/UX Lead",
    bio: "Manase Gunga creates intuitive and visually appealing user experiences for tech solutions.",
    image: manaseImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Carolyne Githenduka",
    position: "Web Development Lead",
    bio: "Carolyne Githenduka is passionate about building scalable web applications and mentoring developers.",
    image: carolImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Stanley Amunze",
    position: "Mobile Apps Development Lead",
    bio: "Stanley Amunze specializes in mobile app development, bringing innovative ideas to life.",
    image: stanleyImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Paul Karanja",
    position: "Cloud Engineering Lead",
    bio: "Paul Karanja is an expert in cloud computing, helping students explore cloud solutions.",
    image: paulImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Evyonn Mbithe",
    position: "Power Platform Lead",
    bio: "Evyonn Mbithe empowers students with Microsoft Power Platform knowledge for business solutions.",
    image: evvonImg,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];
