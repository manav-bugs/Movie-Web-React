import React from 'react'
import { useGlobalContext } from './context';

const Home = () => {
  const name=useGlobalContext();
  return (
    <>
      <div>My Home Page</div>
      <p>{name}</p>
    </>
  )
}

export default Home