import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";


const dummyPlaces = [
  {
    id: 'p1',
    title: 'dummy title',
    description: 'dummy des',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: 'dummy address',
    location: {
      lat: 40,
      lng: -73
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'dummy title',
    description: 'dummy des',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: 'dummy address',
    location: {
      lat: 40,
      lng: -73
    },
    creator: 'u2'
  },
]
const UserPlaces = () => {

  const userId = useParams().uid;

  const loadedPlaces = dummyPlaces.filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces