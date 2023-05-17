import React from 'react'
import {homeObjOne} from './Data';
import {homeObjTwo} from './Data';
import { InfoSection3 } from '../../component';

const Home = () => {
  return (
    <>
        <InfoSection3 {...homeObjOne} />
        <InfoSection3 {...homeObjTwo} />
    </>
  );
};

export default Home
