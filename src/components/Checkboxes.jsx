function Checkboxes(props) {
  console.log("Inside Checkboxes: ", props);

  const { spendTime, handleSpendTimeCheckboxInput } = props;

  return (
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <ul>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="swimming"
              onChange={handleSpendTimeCheckboxInput}
              checked={spendTime.swimming}
            />
            Swimming
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="bathing"
              onChange={handleSpendTimeCheckboxInput}
              checked={spendTime.bathing}
            />
            Bathing
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="chatting"
              onChange={handleSpendTimeCheckboxInput}
              checked={spendTime.chatting}
            />
            Chatting
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="noTime"
              onChange={handleSpendTimeCheckboxInput}
              checked={spendTime.noTime}
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checkboxes;
