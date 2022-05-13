import React from 'react';
import Card from './card';
import '../css/top-card-list.css'

const cardListData =[
  {
    id: 1,
    username: '@omal',
    followers:'50k',
    todayFollower:15,
    iconSocial: "images/icon-facebook.svg",
    name:'facebook',
  },
  {
    id: 2,
    username: '@magb',
    followers:'28k',
    todayFollower:10,
    iconSocial: "images/icon-twitter.svg",
    name:'twitter',
    },
  {
    id: 3,
    username: '@ersp',
    followers:'6k',
    todayFollower:1,
    iconSocial: "images/icon-instagram.svg",
    name:'instagram',
  },
  {
    id: 4,
    username: '@xmgñ',
    followers:'12k',
    todayFollower:10,
    iconSocial: "images/icon-youtube.svg" ,
    name:'youtube',
  },
  {
    id: 5,
    username: '@ansp',
    followers:'3k',
    todayFollower:4,
    iconSocial: 'images/icon-facebook.svg',
    name:'facebook',
  },
  {
    username: '@clvch',
    followers:'51k',
    todayFollower:-7,
    iconSocial:'images/icon-instagram.svg' ,
    name:'instagram',
  },

]
export default function TopCardList(){ 
  return (
          <section className="top-cards">
              <div className="wraper">
                <div className="grid">
                  {
                    cardListData.map((cardData) => <Card key={cardData.id}{...cardData }/>)
                  }
                {/* <article className="card facebook">
                  <p className="card-title">
                    <img src="images/icon-facebook.svg" alt=""/>
                    @cris.valench
                    </p>
                    <p className="card-followers">
                      <span className="card-followers-number">1987</span>
                      <span className="card-followers-title">Followers</span>
                    </p>
                      <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/>
                        12 Today
                      </p>
                </article>

                <article className="card twitter">
                  <p className="card-title">
                    <img src="images/icon-twitter.svg" alt=""/>
                    @cris.valench
                    </p>
                    <p className="card-followers">
                      <span className="card-followers-number">1987</span>
                      <span className="card-followers-title">Followers</span>
                      </p>
                      <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/>
                        99 Today
                      </p>
                </article>

                <article className="card instagram">
                  <p className="card-title">
                    <img src="images/icon-instagram.svg" alt=""/>
                    @cris.valench
                    </p>
                    <p className="card-followers">
                      <span className="card-followers-number">1987</span>
                      <span className="card-followers-title">Followers</span>
                    </p> 
                      <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/>
                        1000 Today
                  </p>
                </article>
                <article className="card youtube">
                  <p className="card-title">
                    <img src="images/icon-youtube.svg" alt=""/>
                    @cris.valench
                    </p>
                    <p className="card-followers">
                      <span className="card-followers-number">1987</span>
                      <span className="card-followers-title">Followers</span>
                    </p>
                      <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/>
                        12 Today
                      </p>
                </article> */}
              </div>
              </div>
            </section>
  )
}