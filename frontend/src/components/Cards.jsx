import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
        <div>
        <div className="card bg-base-100 w-96 shadow-xl mt-5 hover:scale-105 duration-150 dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary"> {item.category} </div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">Rs.{item.price}</div>
      <div className="badge badge-outline hover:text-pink-500 duration-200 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Cards