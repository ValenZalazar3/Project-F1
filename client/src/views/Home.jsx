import React, { useEffect } from 'react'
import { Card } from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { getDrivers } from '../redux/actions'



export const Home = () => {
  const dispatch = useDispatch()
  const drivers = useSelector(state => state.drivers)
  useEffect(() => {


    dispatch(getDrivers())


  }, [dispatch])

  return <>

    {
      drivers?.map(driver => (
        <Card key={driver.id} driver={driver} />
      ))}

  </>
}
