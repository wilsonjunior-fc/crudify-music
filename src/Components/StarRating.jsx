import { Component } from 'react';
import { Star } from 'lucide-react';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.initialRating || 0,
      hover: 0,
    };
  }

  render() {
    const { rating, hover } = this.state;
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
                onClick={() => { this.setState({ rating: starValue }); this.props.onRate(starValue); }}
              />
              <Star
                className="cursor-pointer"
                size={24}
                color={starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => this.setState({ hover: starValue })}
                onMouseLeave={() => this.setState({ hover: 0 })}
              />
            </label>
          );
        })}
      </div>
    );
  }
}
