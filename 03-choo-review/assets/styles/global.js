const css = require("sheetify");

css("bootstrap");

css`
  body {
    padding-top: 60px;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
  }

  ul li {
    display: inline;
  }

  .track {}
  .track--active h3 {
    color: red;
  }

  .btn small {
    color: #fafafa;
  }
`;
