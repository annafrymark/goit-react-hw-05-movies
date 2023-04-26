import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewWithMovieId } from 'utils/GetInfo';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchReviews = async () => {
    try {
      let reviews = await fetchReviewWithMovieId(movieId);
      setReviews(reviews);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    searchReviews();
    setisLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
