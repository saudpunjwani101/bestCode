import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Accounts from '../Business/Accounts';
const accountsObj = new Accounts();

// Styles
import styles from './Styles/AccountListScreenStyle'

class AccountListScreen extends Component {
  componentWillMount()  {
      accountsObj.create({
        accountID: 7,
        name: 'test',
        type: 'male',
        balance: 200000,
        created: new Date(),
        modified: new Date()
      })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>AccountListScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountListScreen)
