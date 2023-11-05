import { Link } from "react-router-dom";

const CategoryCard = ({cart}) => {

    const  {
      jobTitle,
      DeadLine,
      Description,
      MaximumPrice,
      MinumumPrice,
    }=cart;

    return (
      <div className="card lg:card-side bg-sky-300 md:h-[250px] my-8 shadow-xl">
       <div className="card-body">
        <h2 className="card-title "><span className="font-bold ">Job Title: </span> {jobTitle}</h2>
        <h2 ><span className="font-bold "> DeadLine:</span> {DeadLine}</h2>
        <h2><span className="font-bold "> Price range: </span>{MinumumPrice} -{MaximumPrice}</h2>
        <h2><span className="font-bold ">Description: </span>{Description}</h2>
        <Link >
          <button className="btn btn-neutral">Bid Now</button>
        </Link>
      </div>
      </div>
    );
  };

export default CategoryCard;