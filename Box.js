import React from 'react';
import Item from './Item';

export default function Box(props) {
  const items = props.data.map((singleData, key) => (
    <Item key={key} item={singleData.item} time={singleData.time} />
  ));

  return <div className='p-3'>{items}</div>;
}
// import React from 'react';
// import Item from './Item';

// export default function Box(props) {
//   const items = props.data.map(
//     (singleData, key) => ( // Pass item and index as arguments
//      return <Item key={key} item={singleData.item} time ={singleData.time} /> // Pass the item data as a prop to Item
//   );

//   return (
//     <div className='p-3'>
//       {items}
//     </div>
//   );
// }
// import React from 'react';
// import Item from './Item';

// export default function Box(props) {
//   const items = props.data.map(() => {
//  return <Item />;
//   });

//   return (
//     <div className='p-3'>
//       {items}
//     </div>
//   );
// }




