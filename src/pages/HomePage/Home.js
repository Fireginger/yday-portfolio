import React from 'react'
import {homeObjOne} from './Data';
import {homeObjTwo} from './Data';
import { InfoSection } from '../../component';

const Home = () => {
  return (
    <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home
