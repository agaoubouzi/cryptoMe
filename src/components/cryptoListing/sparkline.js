import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


function Sparkline(props) {
  const item = [...props.item.slice(20, 50), ...props.item.slice(100, props.item.length)];
  return (
    <>
      <Sparklines data={item}>
        <SparklinesLine style={{ fill: "none", stroke: props.itemColor, strokeWidth: "3" }} />
      </Sparklines>
    </>
  );
}
export default Sparkline;