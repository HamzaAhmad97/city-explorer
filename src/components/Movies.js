import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Movies extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-center pb-3 ">
        <Row>
          {this.props.data.length !== 0 ? (
            <h2
              className="text-center text-primary m-auto mt-0 mb-3 w-50"
              style={{ padding: "1rem 0", borderRadius: "5px" }}
            >
              <strong>Related movies</strong>
            </h2>
          ) : undefined}
        </Row>
        {this.props.data.map((itm, i) => {
          return (
            <div
              key={i ** 2}
              className="border col-xl-3 p-0 border-primary"
              style={{ margin: "0.5rem", borderRadius: "25px" }}
            >
              <h3
                className="text-center m-3"
                style={{
                  backgroundColor: "#000112",
                  color: "white",
                  padding: "0.5rem 0",
                  borderRadius: " 15px 15px 0 0",
                }}
              >
                {" "}
                {itm.title}
              </h3>
              <p className="text-center m-3">
                Average rating: {itm.vote_average}
              </p>
              <p className="text-center m-3">Popularity: {itm.popularity}</p>
              <p className="text-center m-3">
                Release date: {itm.release_date}
              </p>
              <div
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  height: "auto",
                  overflow: "hidden",
                }}
              >
                <img
                  src={
                    itm.poster_path
                      ? `http://image.tmdb.org/t/p/w500//${itm.poster_path}`
                      : "https://lh3.googleusercontent.com/YuUZKDS8TFL7rRrXfvTNSc-xuJnHZc58_6r9ThOnleihw_tKPiRL2K-7NlW2vzIYC5-jX9XwFu1StkQQJcR1kqrmxDiN2QXzKK0kXePOuO8YnL9Cm5VHTwfdCL9eIJM6O_ZWfieMQdx5tVOeB51gd9d3mqPm8PqHHUS_NeujKuQjUj1GVZ1h6OYGUymfhClQftbYQLh9cYlBtsbA_z9Pa4uk_RhXGPmj2D1u_gKAN0-k2EPIPXVq97ha_TyNZfS7DS9M9UlQXE2cnR-oCmPcP1kEQuksbYdStnyVpbPnHfhdUWX0m3AuNVicz5rbn8fAPxiSmyI_rNQ-mkbssrE_DCLvz8NUiKaZTBHsayrDWeShags6hcNH0yMMLvUjuyUWNiMDt0TYxkZ641n7aR4E4RWMsz91y21mlPirMuceGuBoN9sv80CsHLmuJ7-I1AKrbEJUHRnxS9Hiwx0TesKj5iA3FMvfzjUjp6wtwWS8TAGoi6u0e52_U8ag6jlfL_DMCYhS9fF4E_AdXzpjN54EqkguQ9N7rNYSUQ7raLQFLgt1B3enoPXrJxJvlk0PB_sk-ZlVf3L2Qz0NivlaZNk-jvCPdywxLPVawsWkvCMag2EyqANiINEJVaLFgrulboq0NDwpSqDAm_KKa_c-tif5xugFWzaTutObfBhJG_T6agrxzXgyr9tBIu3BeBlWQC1pCzLEWEbn7dqBjCzH3maoYTdK=w654-h981-no?authuser=3"
                  }
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          );
        })}
      </Row>
    );
  }
}
