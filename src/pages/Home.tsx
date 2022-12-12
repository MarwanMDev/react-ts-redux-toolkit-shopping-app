import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CaroselImage1 from '../assets/carousel-bg-1.jpg';
import CaroselImage2 from '../assets/carousel-bg-2.jpg';
import './home.css';
import Container from '@mui/material/Container';
import StyleIcon from '@mui/icons-material/Style';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HEADPHONEIMAGE from '../assets/headphones.jpg';
import { Card, CardMedia } from '@mui/material';

export default function Home() {
  const rows = [
    'Phones',
    'Computers',
    'Cars',
    'Clothes',
    'Sensors',
    'Accessory',
    'Baby Care',
    'https',
    'Twitter',
    'Facebook',
    'Twitter',
  ];

  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return <></>;
}
