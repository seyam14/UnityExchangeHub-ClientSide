import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import MyPostedCard from "../MyPostedCard/MyPostedCard";
import Swal from "sweetalert2";
import {Helmet} from "react-helmet";

const MyPostedJobs = () => {

  const { user } = useContext(AuthContext);

  const [card, setAddCard] = useState([]);

  console.log(card);
  const url = `https://b8a11-server-side-seyam14.vercel.app/addJobs?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddCard(data));
  }, []);

  const handleDelete = id => {
    const proceed = Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    if (proceed) {
        fetch(`https://b8a11-server-side-seyam14.vercel.app/addJobs/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'deleted successful',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                      const remaining = card.filter(booking => booking._id !== id);
                      setAddCard(remaining);
                }
            })
    }
}

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
      <Helmet>
        <title>UEHub|MyPostedJobs</title>
      </Helmet>
      {card?.map((data) => (
        <MyPostedCard key={data._id} item={data} card={card} handleDelete={handleDelete} setAddCard={setAddCard} />
      ))}
    </div>
  );
};

export default MyPostedJobs;
