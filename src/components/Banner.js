import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
export default class Banner extends Component {
  render() {
    return (
      <div className=" h-100 d-inline-block w-100 mb-3">
        {/* <h2 className='text-center'>
          Check out our adnvanced search engine
        </h2> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://images.unsplash.com/photo-1603581660662-e60caaeca730?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fDE2JTNBOXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://data.1freewallpapers.com/download/buildings-city-night-lights-aerial-view-1920x1080.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eskipaper.com/images/city-at-dusk-wallpaper-1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
