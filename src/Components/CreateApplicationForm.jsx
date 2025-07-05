import React from 'react';

function CreateApplicationForm() {
    return (
        <div className="w-full bg-white rounded-xl px-6 mt-6">
            <div className='p-4 shadow-lg rounded-xl'>
                <h2 className="text-2xl font-bold mb-1 text-gray-900">Create New Application for Tracker</h2>
                <div className="text-base font-semibold text-gray-700 mb-4">Basic Details</div>
                <form className="space-y-8">
                    {/* Basic Detail Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input type="text" placeholder="Client Name" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                        <select className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition">
                            <option>Please Select Principal Employer Name</option>
                        </select>
                        <select className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition">
                            <option>CLRA_NEW</option>
                        </select>
                        <input type="number" placeholder="No Of Labour" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="text" placeholder="Contact Person Name" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                        <input type="email" placeholder="Contact E-mail" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                        <input type="text" placeholder="Contact Mobile" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                    </div>
                    <hr className="my-2 border-gray-200" />
                    {/* Fields use for CLRA NEW */}
                    <div className="text-base font-semibold text-gray-700 mb-2">Fields for CLRA NEW</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div className="flex w-full gap-2">
                            <select className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition">
                                <option>Form - 5</option>
                            </select>
                            <button type="button" aria-label="Add Form" className="bg-gray-50 border border-gray-200 rounded-lg p-2 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                            </button>
                        </div>
                        <div className="flex w-full gap-2">
                            <input type="text" placeholder="Period Start and End Date" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                            <button type="button" aria-label="Add Period" className="bg-gray-50 border border-gray-200 rounded-lg p-2 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg shadow-sm transition-all text-base focus:outline-none focus:ring-2 focus:ring-blue-200">Save and create link</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateApplicationForm;
