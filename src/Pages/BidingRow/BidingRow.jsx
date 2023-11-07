const BidingRow = ({ Biding }) => {
    const { JobTitle, Email, DeadLine, status } = Biding;
    return (
        <tr>
            <td>
                {JobTitle}
            </td>
            <td>{Email}</td>
            <td>{DeadLine}</td>
            <td>{status}</td>
            <td>
                <button className="btn btn-secondary">Complete</button>
            </td>
        </tr>
    );
};

export default BidingRow;
