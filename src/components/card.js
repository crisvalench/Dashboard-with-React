  import React from "react";
  import '../css/card.css';

  export default function Card ({username, followers, todayFollower, iconSocial, name}){
    const cardClass =`card ${name}`
  return(
    <article className={cardClass}>
      <p className="card-title">
      <img src={iconSocial} alt=""/>{username}
      </p>

      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>

        <p className="card-today">
          <img src="images/icon-up.svg" alt=""/>{todayFollower} Today
        </p>
    </article>
    )
  }