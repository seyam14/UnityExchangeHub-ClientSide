import FrequentlyAskedQuestions from "../../Sections/FrequentlyAskedQuestions";
import ReviewsAndRatings from "../../Sections/ReviewsAndRatings";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ReviewsAndRatings></ReviewsAndRatings>
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
            
        </div>
    );
};

export default Home;