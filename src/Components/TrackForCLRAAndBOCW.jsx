import React, { useState, Fragment } from 'react'
import data from '../Data/track_clra_bocw_data.json'
import { Dialog, Transition } from '@headlessui/react'
import UpdatePaymentStatus from './Dialogs/UpdatePaymentStatus'

function TrackForCLRAAndBOCW() {
    const [updatePaymentOpen, setUpdatePaymentOpen] = useState(false)

    const handleOpenUpdatePayment = () => {
        setUpdatePaymentOpen(true)
    }
    const handleCloseUpdatePayment = () => {
        setUpdatePaymentOpen(false)
    }

    return (
        <div className="w-full bg-white rounded-xl px-6 mt-6">
            {/* UpdatePaymentStatus Modal */}
            <Transition.Root show={updatePaymentOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleCloseUpdatePayment}>
                    <Transition.Child as={Fragment}>
                        <div className="fixed inset-0 bg-gray-500 opacity-50" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                                    <UpdatePaymentStatus onClose={handleCloseUpdatePayment} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
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
                                                {row.paymentstatus.label === 'Pending' ? <img src="/Icons/ic_credit_card.svg" alt="preview" className='w-6' /> : <img src="/Icons/ic_edit.svg" alt="preview" className='w-6' onClick={handleOpenUpdatePayment} />}
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
