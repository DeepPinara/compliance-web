import React from 'react'

function DocValidationPrev({ onClose, previewImg, onPreview, onClosePreview, images = [] }) {
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
                <div className="flex flex-col md:flex-row gap-4">
                    <div className='md:w-1/2 flex flex-col gap-y-4'>
                        <div className="form-5">
                            <h1 className="font-semibold mb-1">Form 5</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Form 5 Document ${idx+1}`}
                                        className={`w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover border-2 transition-all ${previewImg === img ? 'border-blue-500 ring-2 ring-blue-200' : 'border-transparent'}`}
                                        onClick={() => onPreview(img)}
                                        tabIndex={0}
                                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onPreview(img)}
                                        aria-label={`Preview Form 5 Document ${idx+1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="work-order">
                            <h1 className="font-semibold mb-1">Work order/LoI-Letter of Intent</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Work Order Document ${idx+1}`}
                                        className={`w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover border-2 transition-all ${previewImg === img ? 'border-blue-500 ring-2 ring-blue-200' : 'border-transparent'}`}
                                        onClick={() => onPreview(img)}
                                        tabIndex={0}
                                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onPreview(img)}
                                        aria-label={`Preview Work Order Document ${idx+1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="security-deposit">
                            <h1 className="font-semibold mb-1">Security Deposit Chalan</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Security Deposit Document ${idx+1}`}
                                        className={`w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover border-2 transition-all ${previewImg === img ? 'border-blue-500 ring-2 ring-blue-200' : 'border-transparent'}`}
                                        onClick={() => onPreview(img)}
                                        tabIndex={0}
                                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onPreview(img)}
                                        aria-label={`Preview Security Deposit Document ${idx+1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex flex-col gap-y-4'>
                        <div className="old-license-copy">
                            <h1 className="font-semibold mb-1">Old License Copy</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Old License Copy ${idx+1}`}
                                        className={`w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover border-2 transition-all ${previewImg === img ? 'border-blue-500 ring-2 ring-blue-200' : 'border-transparent'}`}
                                        onClick={() => onPreview(img)}
                                        tabIndex={0}
                                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onPreview(img)}
                                        aria-label={`Preview Old License Copy ${idx+1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <label className='bg-gray-200 rounded-xl p-2 w-fit'>Last License Number: ***X****</label>
                        <div className="gst-certificate">
                            <h1 className="font-semibold mb-1">GST Certificate (3 Pages)</h1>
                            <div className="flex space-x-2">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`GST Certificate Page ${idx+1}`}
                                        className={`w-20 h-20 bg-gray-200 p-2 rounded-2xl cursor-pointer object-cover border-2 transition-all ${previewImg === img ? 'border-blue-500 ring-2 ring-blue-200' : 'border-transparent'}`}
                                        onClick={() => onPreview(img)}
                                        tabIndex={0}
                                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onPreview(img)}
                                        aria-label={`Preview GST Certificate Page ${idx+1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Preview Overlay */}
            {previewImg && (
                <div
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm"
                    tabIndex={-1}
                    aria-modal="true"
                    role="dialog"
                    onClick={onClosePreview}
                    onKeyDown={e => (e.key === 'Escape' ? onClosePreview() : undefined)}
                >
                    <div className="relative" onClick={e => e.stopPropagation()}>
                        <img src={previewImg} alt="Preview" className="max-w-full max-h-[80vh] rounded-lg shadow-lg" />
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                            onClick={onClosePreview}
                            aria-label="Close preview"
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
