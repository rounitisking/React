// by default in the react card function has a parameter of props which accepts the properties from the app.jsx which helps in creating a environment of reusable components 
// in the card function react always give a properties (props) by which we can set the properties of in the react component and make our components reusable
// adding of the default value if the username is passed while creating of the component again -- one way is directly in the jsx variable and the other way is in the params
import React from 'react'

function Card({username = "user" , discription = "none" , btnTxt = "clickme" , views = "0"}) {

  console.log(username)

  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="relative overflow-hidden rounded-lg mb-6">
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-black rounded-full mb-3">
          Featured
        </span>
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">

          {/* here we are passing the default value of the username so if we do not get the value while creating of the component we will add the default value */}

          {username || "user"}
        </h2>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {discription}
      </p>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg transition-colors duration-200">
          {btnTxt}
        </button>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{views}</span>
        </div>
      </div>
    </div>
  )
}

export default Card