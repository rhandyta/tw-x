"use client"

import { Rings } from 'react-loader-spinner';

export default function LoadingProgress ()  {
  return (<div className="flex justify-center items-center ">
  <Rings color="#00BFFF" height={80} width={80} />
</div>)
}