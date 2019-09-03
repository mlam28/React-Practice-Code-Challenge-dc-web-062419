import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi" onClick={() => props.eatSushi(props.sushi)}>
      <div className="plate" > 
        
        {props.eatenSushi.includes(props.sushi) ?  null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi