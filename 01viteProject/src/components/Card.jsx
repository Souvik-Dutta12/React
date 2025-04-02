import React from 'react'

const Card = ({channel,src,bgChange="#09090b"}) => {
  return (
    <>
    <div className="mt-20 mx-auto max-w-md overflow-hidden bg-[#09090b] rounded-xl shadow-md md:max-w-2xl"
        style={{backgroundColor: bgChange}}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={src}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{channel || "ChannelName"}</div>
            <a href="#" className="mt-1 block text-lg leading-tight font-medium text-white hover:underline">
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
              places to do just that.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card
