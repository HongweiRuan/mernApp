import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const UserPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const userId = useParams().uid;

  useEffect(() => {
    const fetchPlaces = async () => {
  
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/places/user/${userId}`);
        const responseData = await response.json();

        console.log('Response:', response);
  
        if (!response.ok) {
          console.error('Error response from API:', responseData);
          throw new Error(responseData.message);
        }
  
        setLoadedPlaces(responseData.places);
        console.log('Places:', responseData.places);
      } catch (err) {
        console.error('Error fetching places:', err);
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchPlaces();
  }, [userId]);

  const clearError = () => {
    setError(null);
  };

  const deleteHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={deleteHandler}/>}
    </React.Fragment>
  );
};

export default UserPlaces;
