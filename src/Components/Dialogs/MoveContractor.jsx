import React from 'react'

function MoveContractor({ onCancel, onRequestAgain, onMove }) {
    return (
        <div className="w-full bg-white rounded-xl p-6">
            <h2 className="text-xl font-semibold text-center mb-1">Move Contractor For Application</h2>
            <p className="text-sm text-gray-500 text-center mb-4">Confirm all document before moving for application</p>
            <hr className="mb-4" />
            <div className="flex items-center justify-center gap-8 mb-6">
                {/* Contractor */}
                <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-orange-300 flex items-center justify-center bg-orange-50 mb-1">
                        <img src="/Icons/PNG/user.png" alt="Contractor" className="w-8 h-8" />
                    </div>
                    <span className="text-xs text-gray-700 mt-1">Contractor</span>
                </div>
                {/* Arrow */}
                <div className="flex flex-col items-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 40 40">
                        <path d="M10 20h20M25 15l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {/* Doer */}
                <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-blue-400 flex items-center justify-center bg-blue-50 mb-1">
                        <img src="/Icons/PNG/user.png" alt="Doer" className="w-8 h-8" />
                    </div>
                    <span className="text-xs text-gray-700 mt-1">Doer</span>
                </div>
            </div>
            <div className="mb-6">
                {/* <label htmlFor="remark" className="block text-sm font-medium text-gray-700 mb-1">Remark</label> */}
                <textarea
                    id="remark"
                    type="text"
                    placeholder="Remark"
                    rows={3}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                />
            </div>
            <div className="flex justify-between items-center gap-2 mt-4">
                <button
                    type="button"
                    className="px-6 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 font-medium transition cursor-pointer"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <p
                    type="button"
                    className="px-6 py-2 rounded-lg bg-orange-100 text-orange-700 font-semibold transition"
                >
                    Request Again For Doc
                </p>
                <button
                    type="button"
                    className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
                    onClick={onMove}
                >
                    Move
                </button>
            </div>
        </div>
    )
}

export default MoveContractor
