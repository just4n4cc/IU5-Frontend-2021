import './Todone.css';

export function Todone(props) {
    return (
      <div className="Todone">
        <input title={props.title} type="checkbox" checked="true" onClick={props.onClickCheckBox}></input>
        <label onClick={props.onClickLabel}><s>{props.title}</s></label>
      </div>
    );
  }