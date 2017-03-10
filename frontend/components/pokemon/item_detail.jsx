import React from 'react';

export const ItemDetail = (props) => {
  return (
    <div>
      <li>Name: {props.item.name}</li>
      <li>Happiness: {props.item.happiness}</li>
      <li>Price: {props.item.price}</li>
    </div>
  );

};
