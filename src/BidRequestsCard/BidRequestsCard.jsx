import axios from "axios";
import  { useState } from "react";

const BidRequestsCard = ({ bid }) => {
  const { _id, JobTitle, Price, Email, DeadLine, status } = bid;

  const [currentStatus, setCurrentStatus] = useState(status);

  const handleAccept = (id) => {
    const newStatus = "Progress";
    updateBidStatus(id, newStatus);
    setCurrentStatus(newStatus);
  };

  const handleReject = (id) => {
    const newStatus = "Rejected";
    updateBidStatus(id, newStatus);
    setCurrentStatus(newStatus);
  };

  const updateBidStatus = (id, newStatus) => {
    axios
      .patch(`http://localhost:5000/mybids/${id}`, { status: newStatus })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <tr>
      <td>{JobTitle}</td>
      <td>{Price}</td>
      <td>{Email}</td>
      <td>{DeadLine}</td>
      <td>{currentStatus}</td>
      <td>
        {currentStatus === "Pending" && (
          <button onClick={() => handleAccept(_id)} className="btn btn-secondary">
            Accept
          </button>
        )}
      </td>
      <td>
        {currentStatus === "Pending" && (
          <button onClick={() => handleReject(_id)} className="btn btn-accent">
            Reject
          </button>
        )}
      </td>
      <td>
        {currentStatus !== "Pending" && (
          <div className="progress-bar">
            {/* Render the progress bar with the current status */}
            <div className="progress" style={{ width: "70%" }}>
              {currentStatus}
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default BidRequestsCard;
