import axios from "axios";

const BidingRow = ({ bid}) => {

    const {_id, JobTitle, Email, DeadLine, status } = bid;
    
    console.log(bid);
    console.log(JobTitle);

    // 
    const handelConfirm = (id) => {
        const status = { status:"complete" };
        axios
          .patch(`https://b8a11-server-side-seyam14.vercel.app/mybids/${id}`, status)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      };
    return (
        <tr>
            <td>
                {JobTitle}
            </td>
            <td>{Email}</td>
            <td>{DeadLine}</td>
            <td>{status}</td>
            <td>
                <button onClick={() =>handelConfirm(_id)} className="btn btn-secondary">Complete</button>
            </td>
        </tr>
    );
};

export default BidingRow;
