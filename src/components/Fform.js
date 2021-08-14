import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
//import DataHandler from "./DataHandler";
import axios from 'axios';
require("dotenv").config();
//const PORT = process.env.PORT;
//const LIQ_TOKEN = process.env.LIQ_TOKEN;
export default class Fform extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      cityEntry: '',
      locationErr: false,
      weatherErr: false,
      moviesErr: false,

      display_name: "",
      lat: "",
      lon: "",

      wData: [],

      mData: [],

      // send data to datahandler ?
      send: false,
      new: false,
      loading: true,
    };
  }
  //////////////////////////////////////////////////////////////////////////////////////
  

  getMap = (cityEntry) => {
    this.setState({cityEntry: cityEntry, new: false});
    this.props.sendDataToMain(this.state);

    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.4a782b6f22a6f448625817dfd828280a&q=${cityEntry}&format=json`;
    axios
      .get(url)
      .then((res) => {
        let { display_name, lat, lon } = res.data[0];
        return { display_name, lat, lon };
      })
      .then(({ display_name, lat, lon }) => {
        this.setState({
          display_name: display_name,
          lat: lat,
          lon: lon,
          locationErr: false,
          weatherErr: false,
          moviesErr: false,
        });
      })
      .then((val) => {
        //send data back to main
        this.getWeather();
      })
      .catch((err) => {
        this.setState({
          locationErr: true,
          weatherErr: false,
          moviesErr: false,
        });
        this.props.sendDataToMain(this.state);
      });
  };

  getWeather = () => {
    let weatherURL = `http://localhost:8080/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.cityEntry}`;
    axios
      .get(weatherURL)
      .then((res) => {
        let data = res.data;
        return data;
      })
      .then((val) => {
        this.setState({
          wData: val,
          locationErr: false,
          weatherErr: false,
          moviesErr: false,
        });
      })
      .then((res) => {
        this.getMovies();
      })
      .catch((err) => {
        this.setState({
          locationErr: false,
          weatherErr: true,
          moviesErr: false,
        });
        this.props.sendDataToMain(this.state);
      });
  };

  getMovies = () => {
    let moviesURL = `http://localhost:8080/movies?cityName=${this.state.cityEntry}`;
    axios
      .get(moviesURL)
      .then((res) => {
        let data = res.data.map((itm) => itm.title);
        return data;
      })
      .then((val) => {
        this.setState({
          mData: val,
          locationErr: false,
          weatherErr: false,
          moviesErr: false,
        });
      })
      .then((res) => {
        this.setState({new: true});
        this.props.sendDataToMain(this.state);
      })
      .catch((err) => {
        this.setState({
          locationErr: false,
          weatherErr: false,
          moviesErr: true,
        });
        this.props.sendDataToMain(this.state);
      });
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLoading(true);
    this.getMap(this.state.input);
  };

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
 
  };
  render() {
    return (
      <div className="w-50 mb-3  m-auto ml-0 mr-0 p-0">
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          className="d-flex flex-column rounded  align-self-center  w-100 "
        >
          <Form.Group className="mb-3 p-0" controlId="formBasicEmail">
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
