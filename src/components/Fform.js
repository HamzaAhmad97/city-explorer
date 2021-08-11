import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
require("dotenv").config();
//const PORT = process.env.PORT;
//const LIQ_TOKEN = process.env.LIQ_TOKEN;
export default class Fform extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      display_name: "",
      lon: "",
      lat: "",
      cityName: "",
      errExists: false,
      errMessage: "",
      wData: [],
      shWeather: false,
      shCity: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.4a782b6f22a6f448625817dfd828280a&q=${this.state.input}&format=json`;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          shCity: true,
          display_name: res.data[0].display_name,
          lat: res.data[0].lat,
          lon: res.data[0].lon,
        }); // end of first .then()

        this.props.getCityData(this.state);
      })
      .catch((err) => {
        if (err.response) {
          this.setState({
            shCity: false,
            shWeather: false,
            errExists: true,
            errMessage:
              "Please check your entry, not found. ",
          });
        }
      });
    //let urlW = `http://localhost:${PORT}/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.cityName}`;
    this.getWeather();
    this.props.getCityData(this.state);
  };
  getWeather = () => {
    let urlW = `http://localhost:8080/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.input}`;
    axios
      .get(urlW)
      .then((res) => {
        this.setState({ wData: res.data, shWeather:true });
      })
      .catch((err) => {
        this.setState({
          shWeather: false,
          errExists: true,
          errMessage: "Error retreiving weather data. ",
        });
        console.log(err);
      });
  };
  handleInput = (e) => {
    this.setState({
      input: e.target.value,
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
              onChange={this.handleInput}
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
