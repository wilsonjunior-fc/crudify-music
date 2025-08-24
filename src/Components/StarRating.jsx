import { useState } from 'react';
import { Star } from 'lucide-react';

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-1 py-4">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={starValue}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={starValue}
              onClick={() => setRating(starValue)}
            />
            <Star
              className="cursor-pointer"
              size={24}
              color={starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
