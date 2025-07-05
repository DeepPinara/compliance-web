import React from 'react'
import data from '../Data/track_clra_bocw_data.json'

function TrackForCLRAAndBOCW() {
    return (
        <div className="w-full bg-white rounded-xl px-6 mt-6">
            <div className='p-4 shadow-lg rounded-xl'>
                <h2 className="text-2xl font-bold mb-1 text-gray-900">Tracker For CLRA And BOCW Application</h2>
                <div className="text-base font-semibold text-gray-700 mb-4">Confirm document and move for application</div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="px-4 py-2 font-medium text-left">Sr.</th>
                                <th className="px-4 py-2 font-medium text-left">Contractor</th>
                                <th className="px-4 py-2 font-medium text-left">Application Type</th>
                                <th className="px-4 py-2 font-medium text-left">Email/Link Send At</th>
                                <th className="px-4 py-2 font-medium text-left">Number Of Labour</th>
                                <th className="px-4 py-2 font-medium text-left">Application Status</th>
                                <th className="px-4 py-2 font-medium text-left">Bill Amount</th>
                                <th className="px-4 py-2 font-medium text-left">Payment Status</th>
                                <th className="px-4 py-2 font-medium text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {data.map((row, i) => (
                                <tr key={i} className="last:border-b-0">
                                    <td className="px-4 py-3">{row.sr}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </span>
                                            <div>
                                                <div className="font-medium text-gray-900">{row.contractor.name}</div>
                                                <div className="text-xs text-blue-500">{row.contractor.emailMobile}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{row.applicationType}</td>
                                    <td className="px-4 py-3">{row.emailOrLink}</td>
                                    <td className="px-4 py-3">{row.numberOfLabour}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold bg-${row.applicationstatus.color}-100 text-${row.applicationstatus.color}-600`}>
                                            {row.applicationstatus.label}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">{row.billAmount}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold bg-${row.paymentstatus.color}-100 text-${row.paymentstatus.color}-600`}>
                                            {row.paymentstatus.label}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2">
                                            <button className="p-1 rounded hover:bg-gray-100 cursor-pointer" >
                                                <img src="/Icons/ic_preview.svg" alt="preview" className='w-6' />
                                            </button>
                                            <button className="p-1 rounded hover:bg-gray-100 cursor-pointer" >
                                                {row.paymentstatus.label == 'Pending' ? <img src="/Icons/ic_credit_card.svg" alt="preview" className='w-6' /> : <img src="/Icons/ic_edit.svg" alt="preview" className='w-6' />}
                                            </button>
                                            {row.applicationstatus.label === 'Approved' && row.paymentstatus.label === 'Success Date' && (
                                                <img src="/Icons/ic_mobile.svg" alt="preview" className="w-6" />)}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TrackForCLRAAndBOCW
