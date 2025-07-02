"use client"
import useGeoLocation from '@/hooks/useGeoLocation';

export default function Home() {

const { location, error, loading } = useGeoLocation((coords) => {
    console.log('Got location in callback:', coords);
  });
  
  return (
    <>
    <h1>hi i am from app/page</h1>
     
    </>
  );
}
