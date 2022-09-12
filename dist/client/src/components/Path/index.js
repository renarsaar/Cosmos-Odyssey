"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.scss");
function index({ path }) {
    return (<div className='path'>
      {path.map((planet) => (<h1 key={planet} className='planet'>
          {planet}
          <i>-</i>
        </h1>))}
    </div>);
}
exports.default = index;
