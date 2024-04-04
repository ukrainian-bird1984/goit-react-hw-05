import { useEffect, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { Suspense, lazy } from "react";

import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';

export default App;

