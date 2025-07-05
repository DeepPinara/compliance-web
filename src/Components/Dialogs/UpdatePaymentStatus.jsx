import React from 'react'

function UpdatePaymentStatus({ onClose }) {
    return (
        <div className="w-full max-w-lg bg-white rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b">
                <h2 className="text-xl font-semibold ">Update Application Document</h2>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            {/* Contractor Info */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-orange-300 flex items-center justify-center bg-orange-50">
                    <img src="/Icons/PNG/contractor.png" alt="Contractor" className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-700">Contractor</span>
                </div>
                <div className="ml-auto flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold">CLRA NEW</span>
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold">Number Of Labour: 400</span>
                </div>
            </div>
            {/* Security Deposit Chalan */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-800">Security Deposit Chalan</span>
                    <button className="flex items-center cursor-pointer gap-1 px-3 py-1 rounded-lg bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition text-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        Add
                    </button>
                </div>
            </div>
            {/* Portal ID/Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <input type="text" placeholder="IFP ID" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                <input type="text" placeholder="IFP Password" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
            </div>
            {/* Application Number/Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <input type="text" placeholder="Application Number" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition" />
                <div className="relative">
                    <input type="text" placeholder="Date Application" className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition pr-10" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </span>
                </div>
            </div>
            {/* Payment Proof */}
            <div className="mb-2">
                <div className="flex items-center justify-between cursor-pointer select-none">
                    <span className="font-medium text-gray-800">Payment</span>
                    <span className="ml-2 text-xs text-gray-500">Payment Proof</span>
                </div>
                <div className="flex gap-2 mt-2 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                        <img key={i} src="/placeholder.jpg" alt="Payment Proof" className="w-16 h-16 rounded-lg object-cover border border-gray-200" />
                    ))}
                </div>
            </div>
            {/* Fees Summary */}
            {/* <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="font-medium text-gray-700 mb-1">Fees Summary</div>
                <div className="text-xs text-gray-500 mb-1">Based on application and number of labour</div>
                <div className="text-sm font-semibold text-gray-800">Manpower Count: <span className="text-black">400</span></div>
            </div> */}
            {/* Actions */}
            <div className="flex justify-between items-center gap-2 mt-4">
                <button
                    type="button"
                    className="px-6 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 font-medium transition cursor-pointer"
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
                >
                    Update Application
                </button>
            </div>
        </div>
    )
}

export default UpdatePaymentStatus
