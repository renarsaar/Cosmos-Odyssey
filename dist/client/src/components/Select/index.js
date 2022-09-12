"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.scss");
function index({ title, name, options, onChange }) {
    return (<div className='form-group'>
      <label htmlFor={name}>{title}</label>

      <select name={name} onChange={onChange}>
        {options.map((option, index) => (<option aria-label={option.label} key={index} value={option.value}>{option.label}</option>))}
      </select>
    </div>);
}
exports.default = index;
