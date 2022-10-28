import React from 'react';
import Data from './LinkData';

const UserLinks = () => {
  const data = Data;
  return (
    <div>
      {
        data && data.map((item) => (
          <ul key={item.id}>
            <l className= "background-color: lightgrey; text-[#101828] text-[18px] rounded-[8px] flex flex-col items-center justify-center w-[100%] bg-[#EAECF0] py-5 my-5"><a href={item.href} target="__blank" id={item.styleId}>{item.name}</a></l>
            
          </ul>
        ))
      }
     <br />
    </div>
  );
};

export default UserLinks;