import React, { Component } from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import 'react-simple-flex-grid/lib/main.css';
// import logo from './logo.svg';
import './App.css';
import { list } from 'postcss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch('https://dev.pestadiskon.com/api/Discounts')
      .then(res => res.json())
      .then(json => {
        console.log('data', json);

        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="body">
          {items.map(item => (
            <Row
              key={item.id}
              className="card"
              style={{ backgroundColor: item.provider === 'ovo' ? 'lightyellow' : 'lightblue' }}
            >
              <Row className="title">{item.shop_name}</Row>
              <Row className="sub-title">{item.short_description}</Row>
              <Row className="text" style={{ color: item.provider === 'ovo' ? 'purple' : 'black' }}>
                {item.provider}
              </Row>
            </Row>
          ))}
        </div>
      );
    }
  }
}

export default App;
