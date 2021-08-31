import { useState } from "react";
import AnswersList from "./AnswersList";
import Checkboxes from "./Checkboxes";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [color, setColor] = useState(null);
  // const [spendTime, setSpendTime] = useState([]);
  const [spendTime, setSpendTime] = useState({
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false
  });

  // For the answersList
  const [answers, setAnswers] = useState([]);

  console.log("State: ", { color, spendTime });

  const handleColorRadioInput = (event) => {
    console.log("Inside handleColorRadioInput: ", event.target.value);

    const value = parseInt(event.target.value, 10);

    setColor(value);
  };

  // const handleSpendTimeCheckboxInput = (event) => {
  //   console.log(
  //     "Inside handleSpendTimeCheckboxInput: ",
  //     event.target.value,
  //     event.target.checked
  //   );

  //   const targetValue = event.target.value;
  //   const isChecked = event.target.checked;

  //   if (isChecked) {
  //     setSpendTime([...spendTime, targetValue]);
  //   } else {
  //     const updatedSpendTime = spendTime.filter(
  //       (value) => value !== targetValue
  //     );

  //     setSpendTime(updatedSpendTime);
  //   }
  // };

  const handleSpendTimeCheckboxInput = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    console.log(
      "Inside handleSpendTimeCheckboxInput: ",
      targetValue,
      isChecked
    );

    const updatedSpendTime = {
      ...spendTime,
      [targetValue]: isChecked
    };

    setSpendTime(updatedSpendTime);
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={() => {}}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleColorRadioInput}
                  checked={color === 1}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleColorRadioInput}
                  checked={color === 2}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleColorRadioInput}
                  checked={color === 3}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleColorRadioInput}
                  checked={color === 4}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <Checkboxes
            spendTime={spendTime}
            handleSpendTimeCheckboxInput={handleSpendTimeCheckboxInput}
          />
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value="" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value="" />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
