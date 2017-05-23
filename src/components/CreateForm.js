import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import ApiRequest from '../util/ApiRequest';

class CreateForm extends Component {
  render() {
    return (
      <form onSubmit={e => {this.onSubmit(e)}}>
        <h2 className="title is-3">Image</h2>
        <Dropzone maxSize={10000000} accept="image/jpeg, image/png" onDrop={files => this.onDrop(files)}>
          <p>Try dropping some files here, or click to select files to upload.</p>
        </Dropzone>
        <br />
        <h2 className="title is-3">Text content</h2>
        <input className="input" required value={(this.state && this.state.textContent) ? this.state.textContent : ''} onChange={e => { this.onTextChanged(e)}} />
        <br />
        <br />
        <input className="button is-success" type="submit" />
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.postImage)
      return;
    let postBody = {
      textContent: this.state.textContent,
      image: {
        data: this.state.postImage,
        type: this.state.type,
        name: this.state.name
      }
    };
    ApiRequest.createPost(postBody).then(res => {
      if (res.status === 200) {
        window.location.pathname = '/feed';
      }
    });
  }

  onTextChanged(e) {
    this.setState({
      textContent: e.target.value
    });
  }

  onDrop(files) {
    var file = files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = event => {
        this.setState({
          postImage: event.target.result,
          type: file.type,
          name: file.name
        });
      }
      reader.readAsDataURL(file);
    }
  }
}

export default CreateForm;