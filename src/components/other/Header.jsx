import React from "react";


const Header = () => {
    return(
        <div className="flex items-end justify-between">
            <h1 className="text-2xl font-medium"> Hello <br/> <span className="font-4xl font-semibold"> Aashish 😆 </span> </h1>
            <button className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"> Log out </button>
        </div>
    )
}

 


export default Header;