import axios from "axios";


const BidRequestsCard = ({bid}) => {
    console.log(bid);
     
    const { _id,JobTitle,Price, Email, DeadLine, status } = bid;
     //     
    const handelAkcept = (id) => {
        const status = { status:"progress" };
        axios
          .patch(`http://localhost:5000/mybids/${id}`, status)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      };
        const handelReject = (id) => {
        const status = { status:"Reject" };
        axios
          .patch(`http://localhost:5000/mybids/${id}`, status)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      };
    
    return (
        <tr>
        <td>
            {JobTitle}
        </td>
        <td>{Price}</td>
        <td>{Email}</td>
        <td>{DeadLine}</td>
        <td>{status}</td>
        <td>
            <button onClick={() =>handelAkcept(_id)} className="btn btn-secondary">Accept</button>
        </td>
        <td>
            <button onClick={() =>handelReject(_id)} className="btn btn-accent">Reject</button>
        </td>
    </tr>
);
};
export default BidRequestsCard;