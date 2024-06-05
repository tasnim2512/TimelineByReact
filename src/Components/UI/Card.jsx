import React from 'react';

export default function Card(props) {
  const classes = props.className;
  return (
    <div className={`rounded-xl shadow-md ${classes}`}>
      {props.children}
    </div>
  );
}
