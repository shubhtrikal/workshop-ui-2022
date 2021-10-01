import { Container } from '@material-ui/core';
import React from 'react';
import Workshops from './Workshops';

var title = 'Android Development with Kotlin';
var tag = 'Workshop';
var date = 'October 17-18, 2021';
var about =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iste odio ipsa fugit sapiente fugiat neque eveniet numquam molestiae asperiores qui nesciunt quibusdam quis amet distinctio, saepe cumque enim vero nemo ullam quaerat nobis dolorum. At omnis a id saepe ipsam, nostrum est deleniti, doloremque minus sed maiores. Recusandae, tenetur fuga ipsum odit, magni harum ex possimus ea voluptate odio quas nobis! Repellat nemo eveniet, minus delectus vero reprehenderit similique pariatur temporibus cupiditate. Magnam non tenetur asperiores dolor recusandae eos praesentium quia quisquam enim. Dicta nobis fugiat tempore doloribus neque porro, ipsam nulla nisi fuga expedita dolor laboriosam sit maiores!';
var description =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Dignissimos iste odio ipsa fugit sapiente fugiat neque eveniet numquam molestiae asperiores qui nesciunt quibusdam quis amet distinctio, saepe cumque enim vero nemo ullam quaerat nobis dolorum. At omnis a id saepe ipsam, nostrum est deleniti, doloremque minus sed maiores. At omnis a id saepe ipsam, nostrum est deleniti, doloremque minus sed maiores. Recusandae, tenetur fuga ipsum odit, magni harum ex possimus ea voluptate odio quas nobis! Repellat nemo eveniet, minus delectus vero reprehenderit similique pariatur temporibus cupiditate. Magnam non tenetur asperiores dolor recusandae eos praesentium quia quisquam enim. Dicta nobis fugiat tempore doloribus neque porro, ipsam nulla nisi fuga expedita dolor laboriosam sit maiores!';

const title1 = 'Android App Development';
const tag1 = 'Workshop';
const date1 = 'October 16-17, 2021';
const about1 =
  "Over the past few years, the Tech world has revolutionized. Among various spheres, Android Application Development is evolving expeditiously and has a popularity that's increasing at a rate of knots. In this competitive world, hands-on learning opportunities are a dire need. And to quench the thirst for knowledge, here comes the Android App Development using Android Studio workshop, providing 100% hands-on & practical sessions under the guidance of a mentor having years of expertise.";
const description1 =
  "The workshop will cover various domains such as understanding practical concepts behind Frontend & Backend and making a practical code for login form by performing coding in XML & JAVA. You will also be able to create your Camera Application and Calculator app along with an understanding of the logic behind the Calculator App. Don't miss this one-of-its-kind workshop which comes with an attractive CV-ready project.";
const point1 = [
  ' Pivotal concepts of Frontend and Backend.',
  ' Crucial topics of XML & Java to code a login form.',
  ' Build your Camera Application.',
  ' Learn to build logic and create your Calculator App.',
  ' 100% practical learning sessions to give you hands-on experience.',
];
const title2 = 'Machine Learning';
const tag2 = 'Workshop';
const date2 = 'October 19-20, 2021';
const about2 = '';
const description2 = '';
const point2 = [
  'The logic behind Image Extraction',
  'Image to Text Converting Applications',
  'Making Chat Bots from scratch and comprehending its Real-life utility',
  'Thoroughly crafted Hands-on and practical sessions',
  'Basics of Python: Loops, Functions, Attributes',
];
const workshopSection = () => {
  return (
    <Container maxWidth='lg'>
      <section className='workshop-section'>
        <div className='title'>
          <h2>
            <span>Workshops</span>ISTE SC MANIT
          </h2>
        </div>
        <Workshops
          title={title1}
          tag={tag1}
          date={date1}
          about={about1}
          description={description1}
          points={point1}
        />
        <Workshops
          title={title}
          tag={tag}
          date={date}
          about={about}
          description={description}
          points={point1}
        />
      </section>
    </Container>
  );
};

export default workshopSection;
