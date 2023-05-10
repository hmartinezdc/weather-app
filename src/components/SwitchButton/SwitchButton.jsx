import './SwitchButton.css';

const SwitchButton = ({ isActiveDarck, setIsActiveDarck }) => {
  return (
    <button
      onClick={() => setIsActiveDarck(!isActiveDarck)}
      className={isActiveDarck ? 'switch-btn  ' : 'switch-btn  active'}
    >
      <span></span>
      <span></span>
    </button>
  );
};

export default SwitchButton;
