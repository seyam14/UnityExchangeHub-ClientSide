import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BidingRow from "../BidingRow/BidingRow";

const MyBids = () => {
    const { user } = useContext(AuthContext);

    const [myBids, setMyBids] = useState([]);

    const url = `http://localhost:5000/mybids?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyBids(data));
    }, [url]);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>DeadLine</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(myBids) ? (
                            myBids.map((Biding) => (
                                <BidingRow key={Biding._id} Biding={Biding}></BidingRow>
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
