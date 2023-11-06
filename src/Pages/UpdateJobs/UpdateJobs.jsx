import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const UpdateJobs = () => {
    const job= useLoaderData();
    const {user}=useContext(AuthContext)

    const { _id, jobTitle, DeadLine, category,  Description, MaximumPrice,MinumumPrice } = job;

    const handleUpdateJob = event => {
        event.preventDefault();

        const form = event.target;

        const jobTitle = form.jobTitle.value;
        const  DeadLine = form. DeadLine.value;
        const category = form.category.value;
        const  Description = form. Description.value;
        const MaximumPrice = form.MaximumPrice.value;
        const MinumumPrice = form. MinumumPrice.value;

        const UpdateJob={ jobTitle, DeadLine, category,  Description, MaximumPrice,MinumumPrice  }

        console.log(UpdateJob);

        // send data to the server
        fetch(`http://localhost:5000/addJobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="bg-green-300 p-24">
        <h2 className="text-3xl font-extrabold">Update job </h2>
        
        
        <form onSubmit={handleUpdateJob } >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> E-mail</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" value={user.email} readOnly placeholder="email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">job Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="jobTitle" defaultValue={jobTitle} placeholder="jobTitle" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form DeadLine and category row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">DeadLine</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="DeadLine" defaultValue={DeadLine} placeholder="DeadLine" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="w-1/2 pl-2 mb-4">
            <label className="text-gray-600" htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              defaultValue={category}
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            >
              <option value="Select a category" >Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>
        </div>

            
            {/* form Description*/}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Description" defaultValue={Description} placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                
                </div>
            {/* form price */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Maximum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="MaximumPrice" defaultValue={MaximumPrice} placeholder="MaximumPrice" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Minumum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="MinumumPrice" defaultValue={MinumumPrice} placeholder="MinumumPrice"  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            {/* button */}
            <input type="submit" value="Update Job" className="btn btn-block" />

        </form>
    </div>
);
};



export default UpdateJobs;