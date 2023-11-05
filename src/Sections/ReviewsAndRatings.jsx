
const ReviewsAndRatings = () => {
  const reviews = [
    {
      id: 1,
      user: 'Foysal Alin ',
      rating: 4,
      comment: 'Great service! Highly recommended.',
    },
    {
      id: 2,
      user: 'Abrar labib',
      rating: 5,
      comment: 'Excellent work.',
    },
    {
        id: 2,
        user: 'Nazmul Islam',
        rating: 5,
        comment: 'Very professional Work .',
      },
  ];

  return (
    <div className="p-4">
      <h2 className="text-4xl font-semibold mb-4 text-center ">Reviews and Ratings</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">{review.user}</p>
            <p className="text-yellow-400">
              {'★'.repeat(review.rating)} ({review.rating})
            </p>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
