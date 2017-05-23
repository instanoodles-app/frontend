import React, { Component } from 'react';

import CreateForm from '../components/CreateForm';
import Navbar from '../components/Navbar';


class Create extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="_jx516">
          <CreateForm />
        </section>
      </div>
    )
  }

  componentWillMount() {
    require('./styles/main.css');
  }
}

export default Create;