<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect, useState } from "react"
>>>>>>> c4d21ec7cffc18c945cb9e511761fe60a0b6c012

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect( () => {
    fetch('review.json')
    .then(res => res.json())
<<<<<<< HEAD
    .then(data => setReviews(data));
  }, []);

  return [reviews, setReviews];
};

export default useReview;
=======
    .then(data => console.log(data));
  }, []);
};
>>>>>>> c4d21ec7cffc18c945cb9e511761fe60a0b6c012
