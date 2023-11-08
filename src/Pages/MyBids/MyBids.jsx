import { useState, useEffect } from "react";
import BidingRow from "../BidingRow/BidingRow";

const MyBids = () => {
    const [myBids, setMyBids] = useState([]);
    console.log(myBids);

    const url = "https://b8a11-server-side-seyam14.vercel.app/mybids";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyBids(data))
            .catch((error) => console.error("Error fetching bids: ", error));
    }, []); 

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>DeadLine</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(myBids) && myBids.length > 0 ? (
                            myBids.map((bid) => (
                                <BidingRow key={bid._id} bid={bid}></BidingRow>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No bids found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;
