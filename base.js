import StorageManager from './storageManager'
const storageManager = new StorageManager();

class Base {
  constructor(tableName){
      console.log("into base")
      this.tableName = tableName;
  }

  create(row){
    storageManager.createOrUpdate(this.tableName, row);
  }

  update(row){
    storageManager.createOrUpdate(tableName, row, true);
  }

  delete(row){
    storageManager.delete(row)
  }

}

export default Base;
