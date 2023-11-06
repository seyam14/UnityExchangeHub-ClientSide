import { Link, useLoaderData } from "react-router-dom";


const MyPostedJobs = () => {
    const item = useLoaderData();
       
    const  {
        _id,
        jobTitle,
        DeadLine,
        Description,
        MaximumPrice,
        MinumumPrice,
      }=item;
    return (
        <div>
        <div className="card lg:card-side bg-sky-300 md:h-[250px] my-4 shadow-xl">
         <div className="card-body">
          <h2 className="card-title "><span className="font-bold ">Name: </span> {jobTitle}</h2>
          <h2 ><span className="font-bold "> DeadLine:</span> {DeadLine}</h2>
          <h2><span className="font-bold "> Price range: </span>{MinumumPrice} -{MaximumPrice}</h2>
          <h2><span className="font-bold ">Description: </span>{Description}</h2>
          <div className="flex gap-4">
            <Link to={`/updateJobs/${_id}`}>
            <button className="btn btn-primary">Update Product</button>
            </Link>
            <Link >
            <button className="btn btn-accent w-[153px]">Delete</button>
            </Link>
         </div>
        </div>
        </div>
       
        </div>  
      );
    };


export default MyPostedJobs;