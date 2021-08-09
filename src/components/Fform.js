import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
export default class Fform extends Component {
  constructor() {
    super();
    this.state = {
      display_name: '',
      lon: '',
      lat: '',
      shErr: false,
      cityName: '',
      errExists: false,
      errMessage: '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      cityName: e.target.children[0].children[0].value,
    });
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.4a782b6f22a6f448625817dfd828280a&q=${this.state.cityName}&format=json`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ display_name: res.data[0].display_name, errExists: false, lat: res.data[0].lat, lon: res.data[0].lon });
        //console.log(res.data[0]);
        this.props.getCityData(this.state);
        return res;
      })
      .catch((err) => {
        if (err.response) {
          this.setState({
            errExists: true,
            errMessage:
              "Please check your entry, not found: " + err.response.status,
          });
          this.props.getCityData(this.state);
        }
      });
      
  };
  render() {
    return (
      <div className="w-50 mb-3 m-auto">
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          className="d-flex flex-column rounded p-3 align-self-center"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
              id="cityInput"
              type="text"
              placeholder="Los Angeles"
              className="w-100"
            ></input>
          </Form.Group>
          <Button variant="primary" type="submit" className="align-self-center">
            Explore!
          </Button>
        </Form>
      </div>
    );
  }
}
