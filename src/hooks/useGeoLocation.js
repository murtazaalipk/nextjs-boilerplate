'use client';

import { useEffect, useState } from 'react';

export default function useGeoLocation(callback) {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setLocation(coords);
        setLoading(false);
        if (typeof callback === 'function') {
          callback(coords); // ✅ only called once
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []); // ✅ empty array = only run once on first render

  return { location, error, loading };
}
