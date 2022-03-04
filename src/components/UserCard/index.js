import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { useState } from "react";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const valueInput = useSelector((state) => state.user.name);
  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <h2>User name: {valueInput} </h2>
      <input type="text" onChange={(evnt) => setNewName(evnt.target.value)} />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};
export default UserCard;
