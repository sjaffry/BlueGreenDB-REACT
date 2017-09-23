var instance = axios.create({  
  timeout: 10000,
  headers: {'Authorization': 'Basic ZGV2OmRldg==',
            'Content-Type': 'application/json',
            'Cifcode': '366898'
          }
});

const Level = (props) => {
	return (    
          <tr>
            <td>{props.levelDescription}</td>
            <td>${props.balance}</td>
          </tr>
    );
};

const LevelList = (props) => {
	return(
  	<div>
      <div className="panel panel-primary">
        <h5 className="panel-heading">Levels</h5>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Level Description</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {props.levels.map(level => <Level key={level.levelDescription} {...level} />)}
            </tbody>
          </table>          
        </div>          
      </div>      
    </div>);
};

const VirtualAccount = (props) => {
	return (
  	<div style={{margin:'1em'}}>        
      <div className="panel panel-primary">
        <h4 className="panel-heading">Virtual Account</h4>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Current Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.name}</td>
                    <td>${props.balance}</td>
                    <td>{props.currentLevel}</td>
                  </tr>
                </tbody>
              </table>
            </div> 
      </div>
    </div>);
};

const VirtualAccountList = (props) => {
	return (
  	<div>
      {props.vaccounts.map(vaccount => <VirtualAccount key={vaccount.id} {...vaccount} />)}
    </div>
  );
};

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transactionId}</td>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>${props.amount}</td>      
    </tr>  
    );
};

const Account = (props) => {
	return (
  	<div>
            <div className="panel panel-primary">
              <h3 className="panel-heading">Account</h3>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Account Number</th>
                      <th>Account Product System Code</th>
                      <th>Adjusted Balance</th>
                      <th>Adjusted Available Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{props.accountNumber}</td>
                      <td>{props.accountProductSystemCode}</td>
                      <td>${props.adjustedBalance}</td>
                      <td>${props.adjustedAvailableFunds}</td>
                      <td>                      
                        <AccountTransactions />
                      </td>                     
                    </tr>
                  </tbody>
                </table>
                <div>
                  <VirtualAccountList vaccounts={props.virtualAccounts}/>
                </div>
              </div>
            </div>
    </div>
  );
};

const AccountList = (props) => {
	return(
  	<div>
      {props.accounts.map(account => <Account key={account.accountId} {...account} />)}
    </div>
  );
};

class TransactionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      "Amount": "",
      "Description": "",
      "TransactionStatus": "Unposted",
      "TransactionStatusLabel": "label label-warning"
    };
    this.handleSubmit = (event) => {
      event.preventDefault();
      instance.post(
        'https://api-bluegreendb.azurewebsites.net/clients/366898/virtualaccounts/1/transactions', 
        {
          Amount: this.state.Amount,
          Description: this.state.Description
        })
        .then(response => {
          console.log(response);
          this.setState({
            "TransactionStatus": "Posted!",
            "TransactionStatusLabel": "label label-success"
          })
        })
        .catch(error => {
          console.log(error);
          this.setState({
            "TransactionStatus": "Error!",
            "TransactionStatusLabel": "label label-danger"
          })
        });
    }
  };

  render() {
    return(
        <div>
        <div>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">New Transaction</h4>
                <h5>TransactionStatus <span className={this.state.TransactionStatusLabel}>{this.state.TransactionStatus}</span></h5>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label for="amt">Amount:</label>
                    <input type="text" 
                      onChange={(event) => this.setState({"Amount": event.target.value})}
                      className="form-control" id="amt" placeholder="$"/>
                  </div>
                  <div className="form-group">
                    <label for="desc">Description:</label>
                    <input type="text" 
                    onChange={(event) => this.setState({"Description": event.target.value})}                    
                    className="form-control" id="desc"/>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>                              
          </div>
        </div>
        </div>
    );
  };
};

const TransactionList = (props) => {
	return(
  	<div>
     <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Transactions</h4>
          </div>
          <div className="modal-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Transaction Id</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>                  
                </tr>
              </thead>
              <tbody>
                {props.transactions.map(transaction => <Transaction key={transaction.transactionId} {...transaction} />)}
              </tbody>
            </table>        
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>                              
      </div>
     </div>
    </div>
  );
};

class AccountTransactions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      "transactions": [],
      "messages": []
    };

    this.addTransactions = (txns) => {
      this.setState( function(prevState){
        return txns
      });
    };

    this.getTransactions = (event) => {
      instance.get(`https://api-bluegreendb.azurewebsites.net/clients/366898/virtualaccounts/1/transactions`)
      .then((resp) => {
      this.addTransactions(resp.data);})
    };
  };

  render(){
  return(
    <div className="btn-group">
          <button type="button" onClick={this.getTransactions} className="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Get Transactions</button>  
          <div className="modal fade" id="myModal" role="dialog">
              <TransactionList transactions={this.state.transactions} />
          </div>
          <button type="button" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#txnPostModal">Post Transactions</button>                    
          <div className="modal fade" id="txnPostModal" role="dialog">
              <TransactionForm />
          </div>
    </div>
  );
};
};

class App extends React.Component { 
    constructor (props) {
      super(props);
      this.state = {
        "accounts": []
      };

      this.addVAccount = (vaccInfo) => {
        this.setState( function(prevState) {        
          return vaccInfo 
          }  
        );
      };
      
      this.handleClick = (event) => {  
        instance.get(`https://api-bluegreendb.azurewebsites.net/clients/366898/virtualaccounts/`)
        .then((resp) => {
        this.addVAccount(resp.data);})
      };
    };
  
  render(){
  	return(
    	<div>
        <div className="container">
          <h2>Transaction Analytics DB V1</h2>
          <button type="button" onClick={this.handleClick} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Get Virtual Accounts</button>
        <AccountList accounts={this.state.accounts} />
        </div>
      </div>
    );
  };
}


ReactDOM.render(<App />, document.getElementById('container'));