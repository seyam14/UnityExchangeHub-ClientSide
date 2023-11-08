import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {Helmet} from "react-helmet";

const JobDetalisPage = () => {
    const { user } = useContext(AuthContext);
    const item = useLoaderData();

    const {
        email,
        jobTitle,
        DeadLine,
        Description,
        MaximumPrice,
        MinumumPrice,
    } = item;
    console.log(item);

    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const Email = form.Email.value;
        const Buyeremail = form.Buyeremail.value;
        const DeadLine = form.DeadLine.value;
        const Price = form.Price.value;
        const cart = {
            Email,
            Buyeremail,
            DeadLine,
            Price,
            jobTitle,
            status: 'Pending',
            applyed: false,
            availavelvid: true,
        };
        console.log(cart);
        fetch(`https://b8a11-server-side-seyam14.vercel.app/mybids`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: " Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    // Determine whether the current user is the owner of the job
    const isOwner = user.email === item.email;

    return (
        <div>
            <Helmet>
                <title>UEHub|Job Detalis Page</title>
            </Helmet>
            <div className="card lg:card-side bg-sky-300 md:h-[200px] my-4 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title "><span className="font-bold ">Name: </span> {jobTitle}</h2>
                    <h2 ><span className="font-bold "> DeadLine:</span> {DeadLine}</h2>
                    <h2><span className="font-bold "> Price range: </span>{MinumumPrice} -{MaximumPrice}</h2>
                    <h2><span className="font-bold ">Description: </span>{Description}</h2>
                </div>
            </div>
            <form onSubmit={handelSubmit} action="">
                <div className="bg-sky-300 p-10 shadow-xl mb-2">
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Buyer email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="Buyeremail" value={email} readOnly placeholder="Buyeremail" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="Email" value={user?.email} placeholder="Bidder Email" className="input input-bordered w-full" />
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
                                <input type="date" name="DeadLine" placeholder="DeadLine" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="m-6">
                        <button className="btn btn-primary" disabled={isOwner}>
                            {isOwner ? "You cannot bid on your own project" : "Bid On the Project"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobDetalisPage;
