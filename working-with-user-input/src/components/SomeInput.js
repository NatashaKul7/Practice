import useInput from "../hooks/useInput";

const SomeInput = (props) => {
  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput((val) => val.includes("@"));

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!isEnteredNameValid && !isEnteredEmailValid) {
      return;
    }

    resetNameInputValues();
    resetEmailInputValues();
  };

  const nameInputClasses = hasNameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = hasEmailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}
        />
        {hasNameInputError && (
          <p className="error-text">Нужно обязательно ввести имя</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Введите Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}
        />
        {hasEmailInputError && (
          <p className="error-text">
            Нужно обязательно ввести корректный Email
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
