import { useState } from "react";

const Question = ({ question }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="section">
      <div
        className={isOpen ? "open" : "closed"}
      >
        <h4>{question.title}</h4>
        <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"} </button>
        {isOpen && <p>{question.info}</p>}
      </div>
    </section>
  );
};

export default Question;
