import axios from "axios";
import React, { Component } from "react";

export default class DataHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityEntry: this.props.cityEntry,

      locationErr: false,
      weatherErr: false,
      moviesErr: false,

      display_name: "",
      lat: "",
      lon: "",

      wData: [],

      mData: [],
    };
  }
  componentDidMount() {
    this.getMap(this.props.cityEntry);
    this.getWeather();
  }

  getMap = (cityEntry) => {
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
          weatherErr: true,
          moviesErr: true,
        });
      })
      .then((val) => {
        //send data back to main
        this.getWeather();
      })
      .catch((err) => {
        this.setState({
          locationErr: true,
          weatherErr: true,
          moviesErr: true,
        });
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
          moviesErr: true,
        });
      })
      .then((res) => {
        this.getMovies();
      })
      .catch((err) => {
        this.setState({
          locationErr: false,
          weatherErr: true,
          moviesErr: true,
        });
      });
  };

  getMovies = () => {
    let moviesURL = `http://localhost:8080/movies?cityName=${this.props.cityEntry}`;
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
        this.props.sendDataToMain(this.state);
      })
      .catch((err) => {
        this.setState({
          locationErr: false,
          weatherErr: false,
          moviesErr: true,
        });
      });
  };
  render() {
    return <></>;
  }
}
