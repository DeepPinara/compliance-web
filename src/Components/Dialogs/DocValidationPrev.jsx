import React, { useState } from 'react'

function DocValidationPrev({ onClose }) {
    const [previewImg, setPreviewImg] = useState(null);
    const images = [
        '/placeholder.jpg',
        '/placeholder.jpg',
        '/placeholder.jpg',
    ];

    return (
        <div className='z-50'>
            <div className="dialog-header flex justify-between items-center">
                <div className='p-6 flex justify-between items-center w-full border-b-2 pb-4 border-gray-200 '>
                    <div>
                        <h1 className='text-xl'>Sharma Himnandini</h1>
                        <h2 className='text-sm'>sharmahimnandini@gmail.com</h2>
                        <h2 className='text-sm'>+91 1234-567-890</h2>
                    </div>
                    <div className="flex space-x-4">
                        <button className='px-4 py-1 rounded-lg bg-blue-100'>CLRA NEW</button>
                        <img src="/Icons/ic_close.svg" alt="close" className='w-4 cursor-pointer' onClick={onClose} />
                    </div>
                </div>
            </div>
            <div className="content p-4 space-y-2 flex flex-col">
                <div className="flex space-x-2 justify-between py-2">
                    <label className='bg-blue-100 w-1/3 text-center rounded-lg p-2'>Number of Labours: 200</label>
                    <label className='bg-blue-100 w-1/3 text-center rounded-lg p-2'>IFP ID: 123456789</label>
                    <label className='bg-blue-100 w-1/3 text-center rounded-lg p-2'>Number of Labours: 200</label>
                </div>
                <div className="flex">
                    <div className='w-1/2 flex flex-col gap-y-4'>
                        <div className="form-5">
                            <h1>Form 5</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt="Placeholder"
                                        className='w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover'
                                        onClick={() => setPreviewImg(img)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="work-order">
                            <h1>Work order/LoI-Letter of Intent</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt="Placeholder"
                                        className='w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover'
                                        onClick={() => setPreviewImg(img)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="security-deposit">
                            <h1>Security Deposit Chalan</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt="Placeholder"
                                        className='w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover'
                                        onClick={() => setPreviewImg(img)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col gap-y-4'>
                        <div className="old-license-copy">
                            <h1>Old License Copy</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt="Placeholder"
                                        className='w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover'
                                        onClick={() => setPreviewImg(img)}
                                    />
                                ))}
                            </div>
                        </div>
                        <label className='bg-gray-200 rounded-xl p-2 w-fit'>Last License Number: ***X****</label>
                        <div className="gst-certificate">
                            <h1>GST Certificate (3 Pages)</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt="Placeholder"
                                        className='w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover'
                                        onClick={() => setPreviewImg(img)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Preview Overlay */}
            {previewImg && (
                <div className="fixed inset-0 flex justify-center items-center">
                    <div className="relative">
                        <img src={previewImg} alt="Preview" className="max-w-full max-h-[80vh] rounded-lg shadow-lg" />
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                            onClick={onClose}
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DocValidationPrev
