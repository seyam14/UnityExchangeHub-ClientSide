import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import MyPostedCard from "../MyPostedCard/MyPostedCard";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [card, setAddCard] = useState([]);
  console.log(card);
  const url = `http://localhost:5000/addJobs?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddCard(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
      {card?.map((data) => (
        <MyPostedCard key={data._id} item={data} card={card} setAddCard={setAddCard} />
      ))}
    </div>
  );
};

export default MyPostedJobs;
