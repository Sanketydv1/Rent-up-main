import h1 from "../assets/images/hero/h1.png";
import h2 from "../assets/images/hero/h2.png";
import h3 from "../assets/images/hero/h3.png";
import h4 from "../assets/images/hero/h4.png";
import h6 from "../assets/images/hero/h6.png";

import p1 from "../assets/images/list/p-1.png";
import p2 from "../assets/images/list/p-2.png";
import p7 from "../assets/images/list/p-7.png";
import p4 from "../assets/images/list/p-4.png";
import p5 from "../assets/images/list/p-5.png";
import p6 from "../assets/images/list/p-6.png";

import city1 from "../assets/images/location/city-1.png";
import city2 from "../assets/images/location/city-2.png";
import city3 from "../assets/images/location/city-3.png";
import city4 from "../assets/images/location/city-4.png";
import city5 from "../assets/images/location/city-5.png";
import city6 from "../assets/images/location/city-6.png";

import team1 from "../assets/images/customer/team-1.jpg";
import team2 from "../assets/images/customer/team-2.jpg";
import team3 from "../assets/images/customer/team-3.jpg";
import team4 from "../assets/images/customer/team-4.jpg";
import team5 from "../assets/images/customer/team-5.jpg";
export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "contact",
    path: "/contact",
  },
];
export const featured = [
  { cover: h1,
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: h2,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: h3,
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: h4,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: h6,
    name: "Villa & Condo",
    total: "80 Property",
  },
];

export const list = [
  {
    id: 1,
    cover: p1,
    name: "Red Carpet Real Estate",
    location: "New Delhi, India",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: p2,
    name: "The Real Estate Corner",
    location: "NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: p7,
    name: "The Real Estate Corner",
    location: "USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: p4,
    name: "The Real Estate Corner",
    location: "Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: p5,
    name: "The Real Estate Corner",
    location: " Montreal, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: p6,
    name: "The Real Estate Corner",
    location: "India",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];
export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "indian Marketer of the Year",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];

export const location = [
  {
    id: 1,
    name: "New Delhi",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city1,
  },
  {
    id: 2,
    name: "Mumbai",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city2
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city3
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city4
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city5
  },
  {
    id: 6,
    name: "Bengaluru",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city6
  },
];
export const team = [
  {
    list: "50",
    cover: team1,
    address: "Liverpool, Canada",
    name: "Sargam Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: team2,
    address: "Montreal, Canada",
    name: "Harijeet",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: team3,
    address: "Denever, USA",
    name: "Sargam Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    cover: team4,
    address: "2272 Briarwood Drive",
    name: "Harijeet",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    cover: team5,
    address: "bengaluru, India",
    name: "Anvar lal",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    cover: team5,
    address: "Mumbai,India",
    name: "Mohan Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];
export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
    ],
  },
];
