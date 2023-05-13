import React, { useEffect, useState } from 'react'
import { RiSearch2Fill } from 'react-icons/ri'
import { MapContainer, TileLayer } from 'react-leaflet'

import Markerposition from '../components/Markerposition'



const IpAddress = () => {

    const [address, setAddress] = useState(null)
    const [ipAddress, setIpAddress] = useState('')



    useEffect(() => {
        try {
            const getInitialData = async () => {
                const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_0ByoO2VugbvMBdhd3oGghmI7SwhBe&ipAddress=8.8.8.8')

                const data = await response.json()
                setAddress(data)
            }
            getInitialData()
        } catch (error) {
            console.log(error)
        }
    }, [])




    // const position = [address.location.lat, address.location.lng]

    // useEffect(() => {
    //     map.flyTo(position, 13, {
    //         animate: true
    //     }, [map, position])
    // })


    return (
        <>
            <div className=' flex flex-col'>
                {/* search button header */}
                <div className='h-[20vh] flex flex-col gap-5 justify-center bg-green-900 p-4'>
                    <h1 className='text-center text-3xl tracking-widest font-semibold text-white'>IP addresss Tracker</h1>

                    <form className=' flex flex-row justify-center'>
                        <input type="text" name="ipaddress" id="ipaddress" placeholder="Search any ip-address eg: 8.8.8.8" className='md:w-[48%] w-[90%] px-5 py-2 rounded-tl-3xl rounded-bl-3xl outline-none border-2 border-slate-400 hover:border-blue-400 focus:border-blue-400 active:border-blue-400 font-semibold text-lg tracking-wide' />
                        <button type="submit" className='bg-gradient-to-r from-blue-400 to-orange-500 hover:from-green-500 hover:to-gray-500 ... px-3 py-1 rounded-tr-3xl rounded-br-3xl  text-white text-2xl w-12 '><RiSearch2Fill /></button>
                    </form>
                </div>




                {
                    address &&
                    <>
                        <div div className='flex justify-center'>
                            <div className='flex md:flex-row flex-col gap-5 md:justify-between justify-center items-center bg-blue-200 shadow-2xl md:w-[45%] w-[90%] h-[25vh] p-5'>
                                <div className='flex flex-col md:gap-10 gap-5'>
                                    <div className='flex flex-row gap-5'>
                                        <h1 className='uppercase tracking-widest'>Ip Address</h1>
                                        <p>{address.ip}</p>
                                    </div>

                                    <div className='flex flex-row gap-5'>
                                        <h1 className='uppercase tracking-widest'>Location</h1>
                                        <p>{address.location.city}, {address.location.region}, {address.location.country}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:gap-10 gap-5'>
                                    <div className='flex flex-row gap-5'>
                                        <h1 className='uppercase tracking-widest'>ISP</h1>
                                        {address ? <p>{address.isp}</p> : 'Not Isp given'}
                                    </div>
                                    <div className='flex flex-row gap-5'>
                                        <h1 className='uppercase tracking-widest'>Time Zone</h1>
                                        <p>UTC {address.location.timezone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true} style={{ width: '100vw', height: '50vh' }} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Markerposition />
                        </MapContainer>

                    </>
                }

            </div>
        </>
    )
}

export default IpAddress