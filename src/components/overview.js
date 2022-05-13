import React from "react";
import '../css/over-view.css'
import CardSmall from "./card-small";
const cardSmallList=[
  {
    key:1,
    tittle: 'Page Views',
    icon: 'images/icon-facebook.svg',
    views:'87',
    growth: 2,

  },
  {
    key:2,
    tittle: 'Likes',
    icon: 'images/icon-facebook.svg',
    views:'52',
    growth: 3,
   
  },
  {
    key:3,
    tittle: 'Likes',
    icon: 'images/icon-instagram.svg',
    views:'5462',
    growth: 2257,
  },
  {
    key:4,
    tittle: 'Likes',
    icon: 'images/icon-instagram.svg',
    views:'52k',
    growth: 1375,
  },
  {
    key:5,
    tittle: 'Retweets',
    icon: 'images/icon-twitter.svg',
    views:'117',
    growth: 303,
  },
  {
    key:6,
    tittle: 'Likes',
    icon: 'images/icon-twitter.svg',
    views:'507',
    growth: 553,
  },
  {
    key:7,
    tittle: 'Likes',
    icon: 'images/icon-youtube.svg',
    views:'107',
    growth: 19,
  },
  {
    key:8,
    tittle: 'Total Views',
    icon: 'images/icon-youtube.svg',
    views:'1407',
    growth: 12,
  },

]

export default function Overview(){
  return(
    <section className="overview">
    <div className="wrapper">
      <h2>Overview - Today</h2>
      <div className="grid">
        {
          cardSmallList.map(({key,tittle,icon, views, growth }) =>(
            <CardSmall
            key={key}
            tittle={tittle}
            icon={icon}
            views={views}
            growth={growth}
          ></CardSmall>
          ))
        }
        
      {/* <div className="card-small">
        <p className="card-small-views">Likes</p>
        <p className="card-small-icon">
          <img src="images/icon-facebook.svg" alt="" />
        </p>
        <p className="card-small-number">52</p>
        <p className="card-small-percentage is-danger">
          <span>
            <img src="images/icon-down.svg"/>
          </span>
        3%
        </p>
    </div>
    <div className="card-small">
      <p className="card-small-views">Likes</p>
      <p className="card-small-icon">
        <img src="images/icon-instagram.svg" alt="" />
      </p>
      <p className="card-small-number">5462</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg"/>
        </span>
      2257%
      </p>
  </div>
  <div className="card-small">
    <p className="card-small-views">Page Views</p>
    <p className="card-small-icon">
      <img src="images/icon-instagram.svg" alt="" />
    </p>
    <p className="card-small-number">52k</p>
    <p className="card-small-percentage">
      <span>
        <img src="images/icon-up.svg"/>
      </span>
    1375%
    </p>
  </div>
  <div className="card-small">
    <p className="card-small-views">Retweets</p>
    <p className="card-small-icon">
      <img src="images/icon-twitter.svg" alt="" />
    </p>
    <p className="card-small-number">117</p>
    <p className="card-small-percentage">
      <span>
        <img src="images/icon-up.svg"/>
      </span>
    303%
    </p>
  </div>
  <div className="card-small">
    <p className="card-small-views">Likes</p>
    <p className="card-small-icon">
      <img src="images/icon-twitter.svg" alt="" />
    </p>
    <p className="card-small-number">507</p>
    <p className="card-small-percentage">
      <span>
        <img src="images/icon-up.svg"/>
      </span>
    553%
    </p>
  </div>
  <div className="card-small">
    <p className="card-small-views">Likes</p>
    <p className="card-small-icon">
      <img src="images/icon-youtube.svg" alt="" />
    </p>
    <p className="card-small-number">107</p>
    <p className="card-small-percentage is-danger">
      <span>
        <img src="images/icon-down.svg"/>
      </span>
    19%
    </p>
  </div>
  <div className="card-small">
    <p className="card-small-views">Total Views</p>
    <p className="card-small-icon">
      <img src="images/icon-youtube.svg" alt="" />
    </p>
    <p className="card-small-number">1407</p>
    <p className="card-small-percentage is-danger">
      <span>
        <img src="images/icon-down.svg"/>
      </span>
    12%
    </p>
  </div> */}
      </div>
    </div>
  </section>
  )
}