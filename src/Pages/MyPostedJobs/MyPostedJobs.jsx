import { useLoaderData } from "react-router-dom";


const MyPostedJobs = () => {
    const item = useLoaderData();
       
    const  {
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
          <div className="m-6">
          <button className="btn btn-primary">Bid Now</button>
         </div>
        </div>
        </div>
       <div className="bg-sky-300 p-10 shadow-xl mb-2">
        <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Buyer email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="Buyeremail" placeholder="Buyeremail" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Bider Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="BiderEmail" placeholder="Bider Email"  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">DeadLine</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="DeadLine" placeholder="DeadLine"  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="m-6">
          <button className="btn btn-primary">Upate Job</button>
         </div>
         <div className="m-6">
          <button className="btn btn-secondary">Delete Job</button>
         </div>
            </div>
        </div>  
      );
    };


export default MyPostedJobs;