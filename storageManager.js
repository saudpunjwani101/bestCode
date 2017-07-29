import Realm from 'realm'
import Account from '../Realm/models/account'
import Category from '../Realm/models/category'
import Currency from '../Realm/models/currency'
import Income from '../Realm/models/income'
import Outcome from '../Realm/models/outcome'

const realm = new Realm({
  schema:[
    Account,
    Category,
    Currency,
    Income,
    Outcome
  ]
});

class StorageManager {

  createOrUpdate(tableName, row, update=false){
    try{
      realm.write(() => {
        let account = realm.create(tableName, row, update);
        console.log("account created" + account.accountID)
      })
    }
    catch(e){
      console.log("exception at create" + e);
    }
  }

  delete(row) {
    realm.delete(row);
  }
}

export default StorageManager;
