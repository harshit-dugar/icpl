import React from 'react'
import Navigation from '../components/Vavigation/Navigation'
import ServiceCarousel from '../components/ServiceCarousel'
import Footer from '../components/Footer/Footer'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {allServices}  from '../allServices'

function ServicePage() {
  return (
    <>
      <Navigation/>
      <ServiceCarousel/>
      <Tabs value="Web Development" className="max-w-[90%]">
        <TabsHeader
          className="bg-transparent overflow-x-scroll z-0 text-red-900"
          indicatorProps={{
            className: "bg-gray-900/10 shadow-none",
          }}
        >
          {allServices.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className='mx-4'>
          {allServices.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <Footer/>
    </>
  )
}

export default ServicePage