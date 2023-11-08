import { useEffect, useState } from "react";
import BidRequestsCard from "../../BidRequestsCard/BidRequestsCard";


const BidRequests = () => {
    const [myBids, setMyBids] = useState([]);
    console.log(myBids);

    const url = "http://localhost:5000/mybids";

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
                             <th>Price</th>
                            <th>Email</th>
                            <th>DeadLine</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(myBids) && myBids.length > 0 ? (
                            myBids.map((bid) => (
                                <BidRequestsCard key={bid._id} bid={bid}></BidRequestsCard>
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

export default BidRequests;