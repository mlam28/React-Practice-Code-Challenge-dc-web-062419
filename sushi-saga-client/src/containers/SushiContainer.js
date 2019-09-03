import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushis.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton changeSushis={props.changeSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer