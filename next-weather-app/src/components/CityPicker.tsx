import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Country, City } from "country-state-city";
import Select from 'react-select';

// Define Country type
type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    };
    label: string;
} | null;

// Define City type
type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    };
    label: string;
} | null;


const CityPicker = () => {
    // Get the router object
    const router = useRouter();

    // Set states
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
    const [selectedCity, setSelectedCity] = useState<cityOption>(null);

    // Get all countries and map them to options
    const options = Country.getAllCountries().map((country) => ({
        value: {
            latitude: country.latitude,
            longitude: country.longitude,
            isoCode: country.isoCode,
        },

        label: country.name,
    }));

    // Get all cities of the selected country and map them to options
    const cityOptions = selectedCountry
        ? City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(state => ({
            value: {
                latitude: state.latitude!,
                longitude: state.longitude!,
                countryCode: state.countryCode,
                name: state.name,
                stateCode: state.stateCode,
            },
            label: state.name,
        })) : [];

    // Handle selected country and city
    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option);
        setSelectedCity(null);
    };

    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option);
        router.push(`/weather/${option?.value.latitude}/${option?.value.longitude}`); // e.g. /weather/latitude/longitude
    };

    return (
        <>
            <div className='space-y-2'>
                <div className="flex items-center space-x-2 text-white/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <label htmlFor="country">Country</label>
                </div>
                <Select
                    className='text-black'
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    options={options}
                />
            </div>

            {/* Show city picker when country is selected */}
            {selectedCountry && (
                <div className='space-y-2 mt-6'>
                    <div className="flex items-center space-x-2 text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <label htmlFor="city">City</label>
                    </div>
                    <Select
                        className='text-black'
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        options={cityOptions}
                    />
                </div>
            )}
        </>
    )
}

export default CityPicker