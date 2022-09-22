import { Container } from '@material-ui/core';
import React from 'react';
import Workshops from './Workshops';

const title1 = 'Data Structures and Algorithms';
const image1 = 'images/DSA.png';
const tag1 = 'Workshop';
const date1 = 'October 1-2, 2022';
const about1 =
  "Programming is like any other sport. You might know the rules, but you have to play to learn. ISTE SC MANIT is here with a workshop on Data Structures and Algorithms to take you a step toward becoming a better programmer. Beginning with arrays to implementation of linked lists and complex graph algorithms. This course gives an insight into the world of stacks, queues and much more to expand your critical thinking and problem-solving abilities. So, all curious and prying minds out there, register in our engrossing workshop and blaze into the all-important domain of Data Structures and Algorithms.";
const description1 =
  "Data is everywhere. Hence, its organization too, is essential. DSA is not only the basic building block for developing algorithmic and logical thinking, but it also enables us to solve real-world problems effectively. Forming a crucial part of any technical interview and its application also extends to booming fields like Artificial Intelligence and Machine Learning, which makes it quite pivotal to learn.";
const point1 = [
  ' Introduction.',
  ' Understanding the importance.',
  ' Understanding different Data Structures.',
  ' Solving problems.',
  ' Discussing and implementing Algorithms.',
];
const title2 = 'Machine Learning';
const image2 = 'images/ml.jpg';
const tag2 = 'Workshop';
const date2 = 'September 24-25, 2022';
const about2 =
  'Leaping towards an advanced future, ISTE SC MANIT brings to you the workshop on Machine learning. Beginning with the fundamentals of Python by performing various loops, functions, and attributes of Python this course condenses to a multitude of knowledge and provides you with a concise understanding of machine learning theory and application. You will be able to code your image-to-text conversion program as well as your chatbot by the conclusion of the workshop. So, all you young enquiring brains out there, sign up for this premium workshop and harness the power of data in novel ways by developing smart machine learning algorithms.';
const description2 =
  'Bill Gates believes that "A breakthrough in machine learning would be worth ten Microsoft”. Thus, there is no compelling reason to additionally portray the significance of machine learning in this Computer Aided world. Machine Learning has given us self-driving cars, intuitive speech recognition, and an incomprehensibly worked-on grasp of the human genome in the preceding decade. Machine learning is so normal nowadays that you likely use it countless times each day without acknowledging it. ';
const point2 = [
  'Introduction.',
  'Different types of Machine Learning.',
  'Understanding Supervised Learning.',
  'Understanding Unsupervised Learning.',
  'Career Prospects.',
  // 'Basics of Python: Loops, Functions, Attributes',
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
          title={title2}
          image={image2}
          tag={tag2}
          date={date2}
          about={about2}
          description={description2}
          points={point2}
        />
        <Workshops
          title={title1}
          image={image1}
          tag={tag1}
          date={date1}
          about={about1}
          description={description1}
          points={point1}
        />
      </section>
    </Container>
  );
};

export default workshopSection;
