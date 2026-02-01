const ActionButton = ({ onClick }) =>
{
    return (
        <button className="vote-btn" onClick={onClick}>
            मतदान करा
        </button>
    );
};

export default ActionButton;
