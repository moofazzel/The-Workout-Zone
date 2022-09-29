import React from "react";

const Questions = () => {
  return (
    <div className="mx-24">
      <div>
        <label htmlFor="my-modal-5" className="btn modal-button">
          Difference Between React State And Props
        </label>

        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">
              Difference Between React State And Props
            </h3>
            <p className="py-4">
              <h3>React State:</h3>
              The state is an updatable structure. In a component, change in
              state over time can happen. The state is used to contain data or
              information about the component and also take the responsibility
              to make a component dynamic and interactive. The components that
              have their own state are known as a stateful component, while the
              components that don’t have their own state are known as a
              stateless component.
            </p>

            <h3>React Props: </h3>
            <p>
              Props or “Properties” are read-only components, that gives a way
              to pass data from one component to other components. It stores the
              value of attributes of a tag. It is an immutable object that works
              similarly to the HTML attributes. The props cannot be modified
              from inside the component as they are immutable. But we can add
              attributes called props, inside the components. The props are thus
              used to add immutable data in the component.
            </p>

            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="my-modal-5" className="btn modal-button">
          How does react work ?
        </label>

        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">How does react work ?</h3>
            <p className="py-4">
              React creates a VIRTUAL DOM in memory. Instead of manipulating the
              browser's DOM directly, React creates a virtual DOM in memory,
              where it does all the necessary manipulating, before making the
              changes in the browser DOM. React only changes what needs to be
              changed! React finds out what changes have been made, and changes
              only what needs to be changed.
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
