import React from 'react'
import "./main.css"
import img from '../../Assets/img.jpg'

//import icons
import {HiOutlineLocationMarker} from  "react-icons/hi"
import {BsClipboardCheck} from  "react-icons/bs"



const Data=[
  {
    id:1,
    imgSRc:img,
    destTitle: 'Bora Bora',
    location: 'New ZealAnd',
    grade: 'CULTURAL RELAX',
    fees: "$700",
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is know for its luxurious stays and adventures activities.'
  },
  // {
  //   id: 2,
  //   imgSrc: img2,
  //   destTitle: 'Santorini',
  //   location: 'Greece',
  //   grade: 'ROMANTIC GETAWAY',
  //   fees: '$800',
  //   description: 'With its breathtaking sunsets, blue-domed churches and picturesque cliffside villages, Santorini is the perfect destination for a romantic getaway.'
  //   },
    
  //   {
  //   id: 3,
  //   imgSrc: img3,
  //   destTitle: 'Machu Picchu',
  //   location: 'Peru',
  //   grade: 'HISTORICAL ADVENTURE',
  //   fees: '$900',
  //   description: 'Machu Picchu is a true wonder of the world, offering a unique blend of history, culture and adventure. Explore the ancient ruins and enjoy breathtaking views of the Andes Mountains.'
  //   },
    
  //   {
  //   id: 4,
  //   imgSrc: img4,
  //   destTitle: 'Tokyo',
  //   location: 'Japan',
  //   grade: 'CULTURAL EXPERIENCE',
  //   fees: '$1000',
  //   description: 'Tokyo is a city like no other, where ancient traditions meet modern technology. Discover the unique culture, cuisine and architecture of Japan.'
  //   },
    
  //   {
  //   id: 5,
  //   imgSrc: img5,
  //   destTitle: 'Amalfi Coast',
  //   location: 'Italy',
  //   grade: 'SCENIC BEAUTY',
  //   fees: '$1200',
  //   description: 'The Amalfi Coast is a picturesque paradise, with its dramatic coastline, colorful villages and crystal-clear waters. Relax and enjoy the stunning scenery.'
  //   },
    
  //   {
  //   id: 6,
  //   imgSrc: img6,
  //   destTitle: 'Banff',
  //   location: 'Canada',
  //   grade: 'OUTDOOR ADVENTURE',
  //   fees: '$1100',
  //   description: 'Banff National Park offers some of the most breathtaking natural beauty in the world, with its pristine lakes, rugged mountains and abundant wildlife. Hike, ski, or simply take in the views.'
  //   },
    
  //   {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: 'Cape Town',
  //   location: 'South Africa',
  //   grade: 'CITY & BEACH',
  //   fees: '$900',
  //   description: 'Cape Town is a vibrant city with a rich cultural heritage and stunning natural beauty. Explore the city and then head to the beach for some relaxation.'
  //   },
    
  //   {
  //   id: 8,
  //   imgSrc: img8,
  //   destTitle: 'Bali',
  //   location: 'Indonesia',
  //   grade: 'RELAXATION & CULTURE',
  //   fees: '$800',
  //   description: 'Bali is a tropical paradise, with its beautiful beaches, lush forests and vibrant culture. Relax, unwind, and immerse yourself in the local way of life.'
  //   },
    
  //   {
  //   id: 9,
  //   imgSrc: img9,
  //   destTitle: 'Queenstown',
  //   location: 'New Zealand',
  //   grade: 'ADVENTURE SPORTS',
  //   fees: '$1200',
  //   description: 'Queenstown is a mecca for adventure sports, offering everything from bungee jumping to skiing. Thrill-seekers will love this destination.'
  //   }
    
    
]


const Main = () => {
  return (
    <section className='main section container'>


      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSRc, destTitle, location, grade, fees,description})=>{
            return(
              <div key={id} className='singleDestion'>

                <div className="imageDiv">
                  <img src={"imgSRc"} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small> </span>
                    </div>
                    <div className="price">
                      <h5>{ fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <BsClipboardCheck className="icon"/>
                    </button>
                </div>

              </div>
            )
          })
        }

      </div>


    </section>
  )
}

export default Main