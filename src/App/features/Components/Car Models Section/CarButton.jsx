const CarButton = ({ isSelected, onSelect, car}) => {
  const handleButton = () => {
    onSelect(car);
  };

  return (
    <button
      onClick={handleButton}
      className={isSelected ? 'selected-btn' : 'unselected-btn'}
    >
      {car.name}
    </button>
  );
};

export default CarButton;