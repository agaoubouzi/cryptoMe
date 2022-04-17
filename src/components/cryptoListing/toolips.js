import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Toolips(props) {
  return (
    <>
      <OverlayTrigger

        placement={'bottom'}
        overlay={
          <Tooltip id="tooltip-bottom">
            {props.info}
          </Tooltip>
        }
      >
        <i className="fa-solid fa-circle-info"></i>
      </OverlayTrigger>
    </>
  );
}

export default Toolips;