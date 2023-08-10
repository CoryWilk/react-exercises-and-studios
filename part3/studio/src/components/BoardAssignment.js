import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Dessert", value: "Dessert"},
      {label: "Quick", value: "Quick"},
      {label: "Easy", value: "Easy"}
   ];

   const [boardName, setName] = useState("No Boards Yet");

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}