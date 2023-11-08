import FrequentlyAskedQuestions from "../../Sections/FrequentlyAskedQuestions";
import ReviewsAndRatings from "../../Sections/ReviewsAndRatings";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>UEHub|Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ReviewsAndRatings></ReviewsAndRatings>
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
            
        </div>
    );
};

export default Home;