
import Swal from "sweetalert2";

const AddJobs = () => {  
    const handleAddJob = e => {
        e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newJob = {
        email: form.get("email"),
      jobTitle: form.get("jobTitle"),
      DeadLine: form.get("DeadLine"),
      category: form.get("category"),
      Description: form.get("Description"),
      MaximumPrice: form.get("MaximumPrice"),
      MinumumPrice: form.get("MinumumPrice"),
    };
    console.log(newJob);

         // send data to the server
         fetch('http://localhost:5000/addJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })

    }

    return (
        <div className="bg-green-300 p-24">
        <h2 className="text-3xl font-extrabold">Add job </h2>
        
        <form onSubmit={handleAddJob } >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> E-mail</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">job Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="jobTitle" placeholder="jobTitle" className="input input-bordered w-full" />
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
                        <input type="date" name="DeadLine" placeholder="DeadLine" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="w-1/2 pl-2 mb-4">
            <label className="text-gray-600" htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            >
              <option value="Select a category" >Select a category</option>
              <option value="Category 1">Web Development</option>
              <option value="Category 2">Digital Marketing</option>
              <option value="Category 3">Graphics Design</option>
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
                        <input type="text" name="Description" placeholder="Description" className="input input-bordered w-full" />
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
                        <input type="text" name="MaximumPrice" placeholder="MaximumPrice" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Minumum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="MinumumPrice" placeholder="MinumumPrice"  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            {/* button */}
            <input type="submit" value="Add Job" className="btn btn-block" />

        </form>
    </div>
);
};



export default AddJobs;