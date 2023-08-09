const Card = ()=>{
    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-sm">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 text-xs m-2 px-3 py-0.5 rounded-lg text-black/80">
                    Clothes
                </span>
                <img className = "w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="absolute top-0 right-0 bg-white rounded-full flex w-6 h-6 justify-center items-center m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between m-2">
                <span className="text-sm font-light">Nike Shoes</span>
                <span className="text-lg font-medium">$2000</span>
            </p>
        </div>
    )
}
export default Card