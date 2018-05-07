import React, { Component } from 'react'
class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }
 onSubmit(e) {
   e.preventDefault()
   this.props.onSubmit(this.state.username)
 }
 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
      const styles = {
            body:{
              background: '#76b852',
                background: 'linear-gradient(to left, #76b852, #8DC26F)',
                fontFamily: '"Roboto", sans-serif',
                margin: 'auto',
                height: '100vh',
            },
            container: {
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
                boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
            },
            container2: {
                width: '360px',
                padding: '8% 0 0',
                margin: 'auto',
            },

            form: {
                position: 'relative',
                zIndex: '1',
                background: '#FFFFFF',
                maxWidth: '360px',
                margin: '0 auto 100px',
                padding: '45px',
                textAlign: 'center',
                boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',

            },

            forminputtext: {
              fontFamily: '"Roboto", sans-serif',
              outline: 0,
              background: '#f2f2f2',
              width: '100%',
              border: 0,
              margin: '0 0 15px',
              padding: '15px',
              boxSizing: 'border-box',
              fontSize: '14px',
            },
            formbutton: {
              fontFamily: '"Roboto", sans-serif',
              textTransform: 'uppercase',
              outline: 0,
              background: '#4CAF50',
              width: '100%',
              border: 0,
              padding: '15px',
              color: '#FFFFFF',
              fontSize: '14px',
              transition: 'all 0.3 ease',
              cursor: 'pointer',
            },
      }
    return (
        <div style={styles.body}>
        <div style={styles.container}>
            <h1>The Chatting App</h1>
        </div>
        <div style={styles.container2}>
            <div style={styles.form}>
                <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="enter your name" style={styles.forminputtext} onChange={this.onChange} required />
                <input type="submit" style={styles.formbutton} />
                </form>
            </div>
        </div>
        </div>
    
//      <div>
//        <div>
//          <h2>What is your username?</h2>
//          <form onSubmit={this.onSubmit}>
//            <input
//              type="text"
//              placeholder="Your full name"
//              onChange={this.onChange}
//            />
//            <input type="submit" />
//          </form>
//        </div>
//      </div>
    )
  }
}

 export default UsernameForm