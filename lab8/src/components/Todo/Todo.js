import './Todo.css';

export function Todo(props) {
    return (
      <div className="Todo">
        <input title={props.title} type="checkbox" onClick={props.onClickCheckBox} checked={false} ></input>
        <label title={props.labelKey} onClick={props.onClickLabel}>{props.title}</label>
      </div>
    );
  }