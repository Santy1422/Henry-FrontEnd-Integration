import React from "react";
import * as actions from "./../../redux/actions/index";
import { useDispatch } from "react-redux";

const CreateBand = () => {
  const [input, setInput] = React.useState({
    name: "",
    origin: "",
    description: "",
    tickets: 0,
  });

  const [errors, setErrors] = React.useState({
    name: "",
    origin: "",
    tickets: 0,
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(validation({ ...input, [e.target.name]: e.target.value }));
  };

  function validation(input) {
    const error = {};
    if (input.name.length > 30) error.name = "Nombre u Origen demasiado largo";
    if (input.origin.length > 30)
      error.origin = "Nombre u Origen demasiado largo";
    if (input.tickets < 0)
      error.tickets = "Los tickets deben ser un numero positivo";

    return error;
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.origin && !errors.tickets) {
      dispatch(actions.createBands(input));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={input.name}
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="">Origin: </label>
        <input
          type="text"
          name="origin"
          onChange={handleInput}
          value={input.origin}
        />
        {errors.origin && <p>{errors.origin}</p>}
        <label htmlFor="">Description: </label>
        <textarea
          name="description"
          onChange={handleInput}
          value={input.description}
        />
        <label htmlFor="">Tickets: </label>
        <input
          type="number"
          name="tickets"
          onChange={handleInput}
          value={input.tickets}
        />
        {errors.tickets && <p>{errors.tickets}</p>}
        <button type="submit">Create Band</button>
      </form>
    </div>
  );
};

export default CreateBand;