"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Level = function Level(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.levelDescription
    ),
    React.createElement(
      "td",
      null,
      "$",
      props.balance
    )
  );
};

var LevelList = function LevelList(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "panel panel-primary" },
      React.createElement(
        "h5",
        { className: "panel-heading" },
        "Levels"
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "table",
          { className: "table table-hover" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "Level Description"
              ),
              React.createElement(
                "th",
                null,
                "Balance"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            props.levels.map(function (level) {
              return React.createElement(Level, _extends({ key: level.levelDescription }, level));
            })
          )
        )
      )
    )
  );
};

var VirtualAccount = function VirtualAccount(props) {
  return React.createElement(
    "div",
    { style: { margin: '1em' } },
    React.createElement(
      "div",
      { className: "panel panel-primary" },
      React.createElement(
        "h4",
        { className: "panel-heading" },
        "Virtual Account"
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "table",
          { className: "table table-hover" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "Name"
              ),
              React.createElement(
                "th",
                null,
                "Balance"
              ),
              React.createElement(
                "th",
                null,
                "Current Level"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                props.name
              ),
              React.createElement(
                "td",
                null,
                "$",
                props.balance
              ),
              React.createElement(
                "td",
                null,
                props.currentLevel
              )
            )
          )
        )
      )
    )
  );
};

var VirtualAccountList = function VirtualAccountList(props) {
  return React.createElement(
    "div",
    null,
    props.vaccounts.map(function (vaccount) {
      return React.createElement(VirtualAccount, _extends({ key: vaccount.id }, vaccount));
    })
  );
};

var Transaction = function Transaction(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.transactionId
    ),
    React.createElement(
      "td",
      null,
      props.date
    ),
    React.createElement(
      "td",
      null,
      props.description
    ),
    React.createElement(
      "td",
      null,
      "$",
      props.amount
    )
  );
};

var Account = function Account(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "panel panel-primary" },
      React.createElement(
        "h3",
        { className: "panel-heading" },
        "Account"
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "table",
          { className: "table table-hover" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "Account Number"
              ),
              React.createElement(
                "th",
                null,
                "Account Product System Code"
              ),
              React.createElement(
                "th",
                null,
                "Adjusted Balance"
              ),
              React.createElement(
                "th",
                null,
                "Adjusted Available Balance"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                props.accountNumber
              ),
              React.createElement(
                "td",
                null,
                props.accountProductSystemCode
              ),
              React.createElement(
                "td",
                null,
                "$",
                props.adjustedBalance
              ),
              React.createElement(
                "td",
                null,
                "$",
                props.adjustedAvailableFunds
              ),
              React.createElement(
                "td",
                null,
                React.createElement(
                  "button",
                  { type: "button", className: "btn btn-info btn-sm", "data-toggle": "modal", "data-target": "#myModal" },
                  "Get Transactions"
                ),
                React.createElement(
                  "div",
                  { className: "modal fade", id: "myModal", role: "dialog" },
                  React.createElement(AccountTransactions, null)
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(VirtualAccountList, { vaccounts: props.virtualAccounts })
        )
      )
    )
  );
};

var AccountList = function AccountList(props) {
  return React.createElement(
    "div",
    null,
    props.accounts.map(function (account) {
      return React.createElement(Account, _extends({ key: account.accountId }, account));
    })
  );
};

var TransactionList = function TransactionList(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "modal-dialog" },
        React.createElement(
          "div",
          { className: "modal-content" },
          React.createElement(
            "div",
            { className: "modal-header" },
            React.createElement(
              "button",
              { type: "button", className: "close", "data-dismiss": "modal" },
              "\xD7"
            ),
            React.createElement(
              "h4",
              { className: "modal-title" },
              "Transactions"
            )
          ),
          React.createElement(
            "div",
            { className: "modal-body" },
            React.createElement(
              "table",
              { className: "table table-hover" },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    null,
                    "Transaction Id"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Date"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Description"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Amount"
                  )
                )
              ),
              React.createElement(
                "tbody",
                null,
                props.transactions.map(function (transaction) {
                  return React.createElement(Transaction, _extends({ key: transaction.transactionId }, transaction));
                })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "modal-footer" },
            React.createElement(
              "button",
              { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
              "Close"
            )
          )
        )
      )
    )
  );
};

var instance = axios.create({
  timeout: 10000,
  headers: { 'Authorization': 'Basic ZGV2OmRldg==',
    'Content-Type': 'application/json',
    'Cifcode': '366898'
  }
});

var AccountTransactions = function (_React$Component) {
  _inherits(AccountTransactions, _React$Component);

  function AccountTransactions(props) {
    _classCallCheck(this, AccountTransactions);

    var _this = _possibleConstructorReturn(this, (AccountTransactions.__proto__ || Object.getPrototypeOf(AccountTransactions)).call(this, props));

    _this.state = {
      "transactions": [],
      "messages": []
    };

    _this.addTransactions = function (txns) {
      _this.setState(function (prevState) {
        return txns;
      });
    };

    _this.getTransactions = function (event) {
      instance.get("https://api-bluegreendb.azurewebsites.net/clients/366898/virtualaccounts/1/transactions").then(function (resp) {
        _this.addTransactions(resp.data);
      });
    };

    _this.getTransactions();
    return _this;
  }

  _createClass(AccountTransactions, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(TransactionList, { transactions: this.state.transactions })
      );
    }
  }]);

  return AccountTransactions;
}(React.Component);

;

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      "accounts": []
    };

    _this2.addVAccount = function (vaccInfo) {
      _this2.setState(function (prevState) {
        return vaccInfo;
      });
    };

    _this2.handleClick = function (event) {
      //instance.get(`http://localhost:3000/api/vaccounts`)
      instance.get("https://api-bluegreendb.azurewebsites.net/clients/366898/virtualaccounts/").then(function (resp) {
        _this2.addVAccount(resp.data);
      });
    };
    return _this2;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h2",
            null,
            "Transaction Analytics DB V1"
          ),
          React.createElement(
            "button",
            { type: "button", onClick: this.handleClick, className: "btn btn-info btn-lg", "data-toggle": "modal", "data-target": "#myModal" },
            "Get Virtual Accounts"
          ),
          React.createElement(AccountList, { accounts: this.state.accounts })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));