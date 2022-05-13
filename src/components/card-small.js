import React from "react";
import '../css/card-small.css'

export default function CardSmall({key,tittle,icon, views, growth}) {
  return(
    <div className="card-small">
          <p className="card-small-views">{tittle}</p>
          <p className="card-small-icon">
            <img src={icon} alt="" />
          </p>
          <p className="card-small-number">{views}</p>
          <p className="card-small-percentage">
            <span>
              <img src="images/icon-up.svg"/>
            </span>
          {growth}%
          </p>
        </div>
  )
}