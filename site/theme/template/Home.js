import React, { Component } from 'react';
import Layout from './components/Layout';
import Banner from './components/Banner';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout location={this.props.location}>
          <Banner isMobile={false}></Banner>
        </Layout>
      </div>
    );
  }
}