import "./Portal.css";

export const Portal = ({ onAddPerson }) => {
  function handleData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddPerson(data);

    event.target.reset();
    event.target.name.focus();
  }
  return (
    <form onSubmit={handleData}>
      <h3>Send Person to space:</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="craft">Craft:</label>
      <input type="text" id="craft" name="craft" />
      <button>Beam them up</button>
    </form>
  );
};
