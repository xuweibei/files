import React from 'react';
import Header from '../header/index.jsx';
import Content from '../contents/index.jsx';
import Footer from '../footer/index.jsx';
import './index.less';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home-wrap">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
