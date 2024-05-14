import React from 'react'

function CarsFiltersOptions() {
    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
                <h2>Explore our cars you might like</h2>
            </div>
            <div className='flex gap-3 ml-2 mt-5'>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Price</option>
                    <option>Min to Max</option>
                    <option>Max to Min</option>
                </select>
                <select className="select select-bordered md:block w-full max-w-xs hidden">
                    <option disabled selected>Automaker</option>
                    <option>Honda</option>
                    <option>BMW</option>
                    <option>Ford</option>
                    <option>Toyota</option>
                    <option>Tata</option>
                    <option>Suzuki</option>
                    <option>Kia</option>
                    <option>Lexus</option>
                    <option>Mazda</option>
                </select>
            </div>
        </div>
    )
}

export default CarsFiltersOptions
