import { useLoaderData } from "react-router-dom";
import JobDetalisPageCard from "../JobDetalisPageCard/JobDetalisPageCard";


const JobDetalisPage = () => {
    const data =useLoaderData();
     console.log(data);

    return (
        <div className="grid grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
        {data?.map((item) => (
          <JobDetalisPageCard item={item} key={item.id}></JobDetalisPageCard>
        ))}
      </div>
    );
};

export default JobDetalisPage;