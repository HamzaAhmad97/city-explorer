# Project Name

**Author**: Hamza Ahmad

**Version**: 1.0.0 

## Overview
This website is built to allow the user to enter the name of a city, and the website will handle showing all the cities in the world that has a name that matches the enterd name, if the city name is valid the website will show you a number of cards for the matches, including the long name and the longitude and the latitude, and once you click on one of the cards, a modal will pop up showing a map for a small section of the city.

## Getting Started
Although I built this in a hurry and on so many separated steps, the overall idea behind building a website like this can be illustrated as follows:

To build such a website, you will have to have many libraries and packages installed before starting, like npm for handling downloading and uploading packages, and node to handle http requests via other lbraries or modules like axios, then you will need an API that serves or provides an interface for you to get the data you need. Once all of this is ready, you will start desigining your application.

## Architecture
My design is the worst, however, the general idea can be illustrated as follows:

I had a City component that represents every card that gets showed, this city component gets passed the name of the city as well as the longitude and the latitude via props only if the entry is correct and we manage to get the data with no errors. In the App componenet, I had a form, an alert, a modal and the city component gets rendered there. The form contains an input feild for the user to enter the name of the city, and once her submits, the entered data gets passed to the url used from the API, and using axios, we receive the data in a form that can be filtered to get the required data. This data then gets passed to the city component via props. Once a user clicks on a city card, a function is defined to handle that event, and the name in addition to the latitude and the longitude get passed to the map url which gets showed in the modal as a pop up. I have also included an alert that shows an error message when there is an error or when the user enters an invalid value.

## Change Log

8-8-2021 > The basic structure of the website is established, and although it needs some breaking down into smaller or more reusable components, the overall functionality is working, you can find the cities that match your entry, as you also can show the map of the city once you click on it. The style needs some inhancements since it is very simple.
## Credit and Collaborations

Hamza Ahmad and Shukri Jallad

## Features 

* Name of feature: 1. Set up your React repository & API keys.

Estimate of time needed to complete: 30 mins

Start time: 2:30 pm

Finish time: 3:40 pm

Actual time needed to complete: 1 hrs and 10 mins

-----------------------------------------------------------------------------------------------

* Name of feature: 2. Locations: As a user of City Explorer, I want to enter the name of a location so that I can see the exact latitude and longitude of that location.

Estimate of time needed to complete: 1 hr

Start time: 3:41 pm

Finish time: 8:00 pm

Actual time needed to complete: 4 hrs and 19 mins (I had to go to the dentist)

-----------------------------------------------------------------------------------------------

* Name of feature: 3. Map: As a user, I want to see a map of the city so that I can see the layout of the area I want to explore.

Estimate of time needed to complete: 30 mins

Start time: 8:00 pm

Finish time: 9:00 pm

Actual time needed to complete: 1 hr

-----------------------------------------------------------------------------------------------

* Name of feature: 4. Errors: As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

Estimate of time needed to complete: 30 mins

Start time: 9:30 pm

Finish time: 10:17 pm

Actual time needed to complete: 47 mins