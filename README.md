# Cosmos Odyssey

## Introduction
Cosmos Odyssey is a web application that shows the best deals for costumers traveling in our solar system. Customers can select between different planets and the system shows possible routes from different companies. After choosing routes ,customers can make a reservation. Customers can filter the routes based on company name and/or sort the result based on price, distance or travel time. Price list of different routes change every 15 minutes and the last 15 active price lists are stored into database.<br/><br/>
Possible routes between the planets are listed in the image.
![Solar System](https://i.postimg.cc/wTyrcrb1/solar.png)

## Application
Project is hosted with [Heroku](https://cosmosodysseyuptime.herokuapp.com/).<br />
Front-End: React.js<br />
Back-End: Node.js, Express, MongoDB<br/><br/>
![Demo](https://i.postimg.cc/bwbkT0h0/app1.png)
![Demo](https://i.postimg.cc/HLg5PJYq/app2.png)

## File Structure:
```
|-- server.js
|   |-- build
|   |-- dist
|   |-- interfaces
|   |-- job
|       |-- job.ts
|   |-- models
|       |-- priceList.ts
|       |-- reservation.ts
|   |-- routes
|       |-- priceList.ts
|       |-- reservation.ts
|   |-- db.ts
|   |-- index.ts
|   |-- client
|       |-- public
|       |-- src
|           |-- api
|               |-- Reservation.ts
|               |-- TravelPrices.ts
|           |-- assets
|               |-- images
|               |-- svg
|               |-- _variables.scss
|               |-- style.scss
|           |-- components
|               |-- AutoComplete
|                   |-- AutoCompleteList
|               |-- Forms
|                   |-- CreateReservationForm
|                   |-- FiltersForm
|                   |-- Select
|                   |-- SelectPathsForm
|               |-- ImageMap
|                   |-- ImageMapArea
|                   |-- ImageMapAreaTip
|               |-- PageLoader
|               |-- Path
|               |-- PathProviders
|               |-- PossiblePaths
|               |-- ProviderList
|                   |-- ProviderItem
|               |-- Reservation
|           |-- hooks
|               |-- useRedux.ts
|           |-- interfaces
|               |-- Company.ts
|               |-- Planet.ts
|               |-- Provider.ts
|               |-- Reservatioin.ts
|               |-- Route.ts
|               |-- RouteInfo.ts
|           |-- layouts
|               |-- Footer
|               |-- Header
|           |-- lib
|               |-- axiosClient.ts
|               |-- toast.ts
|           |-- pages
|               |-- CreateReservation
|               |-- Home
|           |-- state
|               |-- cart
|               |-- filter
|               |-- journey
|               |-- priceList
|               |-- carproviders
|               |-- store.ts
|           |-- utils
|               |-- helpers
|                   |-- findAllPossibleRoutes.ts
|                   |-- formatDate.ts
|                   |-- numberWithCommas.ts
|               |-- constants.ts
|           |-- index.tsx
```

## Usage
Install dependencies
```
npm install
```
Install Client dependencies
```
npm run install-client
```
Start Development server - [http://localhost:8080](http://localhost:8080).
```
npm run dev
```
Start Client server in new terminal - [http://localhost:3000](http://localhost:3000).
```
npm run client
```