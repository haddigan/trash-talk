export const PlayerName = ({ handleSetName }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSetName(e.target.name.value);
        }}
      >
        <input type="text" id="name" name="name" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
