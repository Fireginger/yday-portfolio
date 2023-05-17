import React from 'react'
import {homeObjOne} from './Data';
import {homeObjTwo} from './Data';
import { InfoSection2 } from '../../component';

const Home = () => {
  return (
    <>
        <InfoSection2 {...homeObjOne} />
        <InfoSection2 {...homeObjTwo} />
    </>
  );
};

export default Home
