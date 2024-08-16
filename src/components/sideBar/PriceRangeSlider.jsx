// PriceRangeSlider.jsx
import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const PriceRangeSlider = ({ minPrice, maxPrice, onChange }) => {
  const [range, setRange] = useState([minPrice, maxPrice]);

  const handleChange = (values) => {
    setRange(values);
    onChange(values);
  };

  return (
    <div className="price-range-slider">
      <RangeSlider
        min={minPrice}
        max={maxPrice}
        step={1}
        value={range}
        onChange={handleChange}
      />
      <div className="price-labels">
        <span>${range[0]}</span> - <span>${range[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
