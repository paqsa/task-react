import "./mainCard.css"

function MainCard({ title, description, onDelete }) {
  return (
    <div className="taskDiv">
      <h2>{title}</h2>
      <h2>{description}</h2>
      <button className="buttonDelete" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default MainCard;
