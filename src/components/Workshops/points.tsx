import React from 'react';
interface props {
  points: string[];
}
const Points: React.FC<props> = (props) => {
  const points = props.points;
  return (
    <ul>
      {points.map((point) => {
        return <li>{point}</li>;
      })}
    </ul>
  );
};

export default Points;
