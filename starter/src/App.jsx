import { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const prevPerson = () => {
    setIndex((prev) => {
      if (prev - 1 < 0) return reviews.length - 1;
      return prev - 1;
    });
  };
  const nextPerson = () => {
    setIndex((prev) => {
      if (prev + 1 > reviews.length - 1) return 0;
      return prev + 1;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};
export default App;
