import React, { useEffect, useState } from 'react'
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapboxGl from '@rnmapbox/maps';
import BoxAtBottom from '../components/BoxAtBottom';
import { State } from '../context/StateProvider';
import { stations } from '../constants/constant';

// MapboxGl.setConnected(true);
MapboxGl.setWellKnownTileServer('Mapbox')
MapboxGl.setAccessToken('pk.eyJ1Ijoicm9oYW5qYWluIiwiYSI6ImNsZ2hrd2I4aTBtZmEzY215dnk1NzU1YW4ifQ.nh_zwHmQ1ymDliNIE7M2_w');

const MapScreen = () => {
  const [fetchedStationLocations, setFetchedStationLocations] = useState([])
  const [initialUserLocation, setInitialUserLocation] = useState([])
  const [selectedStation, setSelectedStation] = useState({})
  const [markerClicked, setMarkerClicked] = useState(false);
  const {location,setLocation} = State()
  

  const handleMarkerPress = () => {
    setMarkerClicked(true);
  };

  const handleMapPress = () => {
    setSelectedStation({})
    setMarkerClicked(false);
  };


  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setInitialUserLocation([position.coords.longitude, position.coords.latitude]);
      },
      error => console.log("🚀 ~ file: MapScreen.jsx:53 ~ useEffect ~ error", error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );

    PermissionsAndroid.requestMultiple(
      [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
      {
        title: 'Give Location Permission',
        message: 'App needs location permission to find your position.'
      }
    ).then(granted => {
    }).catch(err => {
      console.warn(err);
    });

    const fetchData = async () => {
      setFetchedStationLocations(stations)
    }

    fetchData();
  }, [])

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {
          initialUserLocation.length > 0 &&
          <MapboxGl.MapView style={styles.map}
            zoomLevel={15}
            onPress={handleMapPress}
            centerCoordinate={initialUserLocation}
          >
            <MapboxGl.UserLocation
              visible={true}
              onUpdate={(location) => setLocation([location.coords.longitude, location.coords.latitude])}
            />
            <MapboxGl.Camera
              zoomLevel={15}
              centerCoordinate={location.length > 0 ? location : initialUserLocation}
              init
              animationMode={'flyTo'}
              animationDuration={1000}
              // followUserLocation={true}
              followUserMode="normal"
              shouldUpdate={(event) => {
                // Only update the camera position if the user manually moved the map
                return event.properties.gesture !== 'coast';
              }}
            />

            {fetchedStationLocations.length > 0 && fetchedStationLocations.map(marker => (
              <MapboxGl.PointAnnotation
                key={marker.id}
                id={marker.id.toString()}
                title={marker.name}
                coordinate={[marker.coordinates.longitude, marker.coordinates.latitude]}
                onSelected={() => {
                  setSelectedStation({ ...marker })
                  handleMarkerPress()
                }
                }
              />
            ))}

          </MapboxGl.MapView>
        }
        {markerClicked && <BoxAtBottom stationDetail={selectedStation} location={location} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1
  }
});
export default MapScreen