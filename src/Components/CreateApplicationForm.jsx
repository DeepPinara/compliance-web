import React from 'react';

function CreateApplicationForm() {
    return (
        <div className="w-full bg-white px-4 py-6 mx-auto">
            <h2 className="text-xl font-semibold mb-2">Create New Application for tracker</h2>
            <div className="text-base font-medium mb-2">Basic Detail</div>
            <form className="space-y-6">
                {/* Basic Detail Fields */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input type="text" placeholder="Client Name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" />
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm">
                        <option>Please Select Principal Employer Name</option>
                    </select>
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm">
                        <option>CLRA_NEW</option>
                    </select>
                    <input type="number" placeholder="No Of Labour" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="Contact Person Name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" />
                    <input type="email" placeholder="Contact E-mail" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" />
                    <input type="text" placeholder="Contact Mobile" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" />
                </div>
                <hr className="my-2 border-gray-200" />
                {/* Fields use for CLRA NEW */}
                <div className="text-base font-medium mb-2">Fields use for CLRA NEW</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="flex w-full">
                        <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm">
                            <option>Form - 5</option>
                        </select>
                        <button type="button" className="ml-2 px-2 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </button>
                    </div>
                    <div className="flex w-full">
                        <input type="text" placeholder="Period Start and End Date" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" />
                        <button type="button" className="ml-2 px-2 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </button>
                    </div>
                </div>
                <div className="pt-4">
                    <button type="submit" className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition cursor-pointer">Save and create link</button>
                </div>
            </form>
        </div>
    );
}

export default CreateApplicationForm;
