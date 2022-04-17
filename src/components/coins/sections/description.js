import React, { useState } from 'react';


const Description = (props) => {
  let coin = props.coin
  const [toggleText, setToggleText] = useState(false)

  const lenghtP = coin.description && coin.description.en ? (coin.description.en.length > 500 ? true : false) : null;

  const strip = (html) => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText;
  }

  return (
    <div className="description" style={{ backgroundImage: `url('${coin.image && coin.image.large ? coin.image.large : null}')` }} >
      <h2 className="h2-title">About {coin.name}
      </h2>
      <p className={(toggleText ? 'less content' : 'full content')}>{coin.description && coin.description.en ? strip(coin.description.en) : null}</p>
      {lenghtP ? (
        <div className={toggleText ? 'opened' : 'closed'} onClick={() => setToggleText(!toggleText)}></div>
      ) : (
        null
      )
      }
    </div>

  );

}


export default Description;