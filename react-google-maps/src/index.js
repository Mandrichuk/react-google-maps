import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import ReactDOM from 'react-dom';
import './index.css';

const root = document.getElementById('root');

console.log(process.env)
// console.log(root)

// function Home() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBR4FS2tQD2ieN7omv8USWoNIAYEbat5Dg",
//   })

//   if (!isLoaded) return <div>Loading...</div>;
//     return (
//     <div>
//       Map
//     </div>
//   );
// }

// ReactDOM.render(<Home />, root)