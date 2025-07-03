import React from 'react'


import MarketPlaceLayout from '../../../layouts/MarketPlaceLayout.jsx/MarketPlaceLayout'
import PaymentMethods from '../../../components/dashboard/PaymentMethods/PaymentMethods'


const PaymentMethod = () => {
  return (
    <MarketPlaceLayout>
        <PaymentMethods/>
    </MarketPlaceLayout>
  )
}

export default PaymentMethod