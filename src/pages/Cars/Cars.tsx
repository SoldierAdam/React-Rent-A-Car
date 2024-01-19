import React from 'react'
import CarCard from '../../components/CarCard/CarCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CarCardList from '../../components/CarCardList/CarCardList'

type Props = {}

export default function Cars({}: Props) {
  return (
	<>
		<CarCardList/>
	</>
  )
}
