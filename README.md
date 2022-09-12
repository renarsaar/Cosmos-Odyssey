# General Info:
Project is hosted with [Heroku](https://cosmosodysseyuptime.herokuapp.com/).<br />
Front-End: React.js<br />
Back-End: Node.js, Express, MongoDB<br/><br/>

Finding Optimal Paths is done in findAllPossibleRoutes.ts & journeySlice.ts

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
|               |-- AutoCompleteList
|               |-- CreateReservationForm
|               |-- Filters
|               |-- ImageMap
|               |-- ImageMapArea
|               |-- ImageMapAreaTip
|               |-- PageLoader
|               |-- Path
|               |-- PathProviders
|               |-- PossiblePaths
|               |-- ProviderItem
|               |-- ProviderList
|               |-- Reservation
|               |-- Select
|               |-- SelectPathsForm
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