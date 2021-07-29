/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PaginationComponent from './components/Pagination';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {movies$} from './movies'
import AutoPlayMethods from "./components/Slider";

import {loadMovies} from './redux/actions/moviesActions'


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => { 
    movies$.then((json) => dispatch(loadMovies(json)));
  },[]);

  return (
    <div>
      <AutoPlayMethods />
      <PaginationComponent />
    </div>
  );
}
