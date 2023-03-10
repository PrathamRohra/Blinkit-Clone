import prodPhoto from '../assets/10492a.avif';
import ten_min_del from '../assets/10_minute_delivery.avif';
import best_prices from '../assets/Best_Prices_Offers.avif';
import wide_assortment from '../assets/Wide_Assortment.avif';
import '../../src/App.css';
import ProductCard from '../components/ProductCard';


export default function ProductPage() {
  return (
    <div>
    <div className="flex flex-row w-11/12 prod--ht mt-2 p-2 mx-auto">

        {/* PHOTOS + PRODUCT DETAILS */}
        <div className='flex flex-col w-1/2 p-2'>
            <div className='outline outline-yellow-200 p-2'>
                <img src={prodPhoto} className="w-11/12 p-2" />
                <div>MORE IMAGES WILL GO HERE</div> 
            </div>

            <div className='mt-14'>
                <h2 className='font-bold text-xl'>Product Details</h2>
                <h4 className='font-semibold text-sm mt-2'>Key Features</h4>
                <p className='text-gray-600 text-xs'>Sweetened condensed milk Used to prepare variety of milk based desserts</p>

                <h4 className='font-semibold text-sm mt-2'>Unit</h4>
                <p className='text-gray-600 text-xs'>400g</p>

                <h4 className='font-semibold text-sm mt-2'>Shelf Life</h4>
                <p className='text-gray-600 text-xs'>12 months</p>

                <h4 className='font-semibold text-sm mt-2'>Country Of Origin</h4>
                <p className='text-gray-600 text-xs'>India</p>

                <h4 className='font-semibold text-sm mt-2'>Expiry Date</h4>
                <p className='text-gray-600 text-xs'>Please refer to the packaging of the product for expiry date.</p>

                <h4 className='font-semibold text-sm mt-2'>Customer Care Details</h4>
                <p className='text-gray-600 text-xs'>Email: info@blinkit.com<p>Customer Care Number: 1-800-208-8888</p></p>

                <h4 className='font-semibold text-sm mt-2'>Disclaimer</h4>
                <p className='text-gray-600 text-xs'>Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>
            </div>
        </div>

        {/* PRODUCT NAME AND QTY */}
        <div className='flex flex-col p-6 mt-10'>
    
                <h2 className='text-xl' >Amul Mithai Mate Condensed Milk</h2>
                <button className='w-20 h-12 rounded-lg prod--pd mt-4 outline outline-1 outline-green-600'>400g</button>
                <button className='w-32 h-12 bg-green-600 text-white rounded-lg prod--pd mt-3'>ADD</button>

                {/* WHY BLINKIT? */}
                <div className='flex flex-col'>
                    <p className='font-semibold text-md mt-10' >Why Shop from Blinkit?</p>
                    <div className='mt-5 flex flex-row'>
                        <img src={ten_min_del} className="w-14"  />
                        <div className='flex flex-col ml-4'>
                            <p>Superfast Delivery</p>
                            <p className=' text-xs text-gray-500'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                        </div>
                    </div>

                    <div className='mt-5 flex flex-row'>
                        <img src={best_prices} className="w-14"  />
                        <div className='flex flex-col ml-4'>
                            <p>	Best Prices & Offers</p>
                            <p className=' text-xs text-gray-500'>Best price destination with offers directly from the manufacturers.</p>
                        </div>
                    </div>

                    <div className='mt-5 flex flex-row'>
                        <img src={wide_assortment} className="w-14"  />
                        <div className='flex flex-col ml-4'>
                            <p>Wide Assortment</p>
                            <p className=' text-xs text-gray-500'>Choose from 5000+ products across food, personal care, household & other categories.</p>
                        </div>
                    </div>
                </div>

        </div>
    </div>
    <div className='p-3'>
        <h2 className='font-semibold text-2xl mt-10 ml-3'>You might also like</h2>
        <div className='flex flex-row overflow-scroll'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
    </div>
  )
}
