import React from 'react';
import Workshops from './Workshops';

var title = 'Android Development with Kotlin';
var tag = 'Workshop';
var date = 'October 17-18, 2021';
var about =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iste odio ipsa fugit sapiente fugiat neque eveniet numquam molestiae asperiores qui nesciunt quibusdam quis amet distinctio, saepe cumque enim vero nemo ullam quaerat nobis dolorum. At omnis a id saepe ipsam, nostrum est deleniti, doloremque minus sed maiores. Recusandae, tenetur fuga ipsum odit, magni harum ex possimus ea voluptate odio quas nobis! Repellat nemo eveniet, minus delectus vero reprehenderit similique pariatur temporibus cupiditate. Magnam non tenetur asperiores dolor recusandae eos praesentium quia quisquam enim. Dicta nobis fugiat tempore doloribus neque porro, ipsam nulla nisi fuga expedita dolor laboriosam sit maiores!';
var description =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iste odio ipsa fugit sapiente fugiat neque eveniet numquam molestiae asperiores qui nesciunt quibusdam quis amet distinctio, saepe cumque enim vero nemo ullam quaerat nobis dolorum. At omnis a id saepe ipsam, nostrum est deleniti, doloremque minus sed maiores. Recusandae, tenetur fuga ipsum odit, magni harum ex possimus ea voluptate odio quas nobis! Repellat nemo eveniet, minus delectus vero reprehenderit similique pariatur temporibus cupiditate. Magnam non tenetur asperiores dolor recusandae eos praesentium quia quisquam enim. Dicta nobis fugiat tempore doloribus neque porro, ipsam nulla nisi fuga expedita dolor laboriosam sit maiores!';
const workshopSection = () => {
  return (
    <>
      <Workshops
        title={title}
        tag={tag}
        date={date}
        about={about}
        description={description}
      />
    </>
  );
};

export default workshopSection;
