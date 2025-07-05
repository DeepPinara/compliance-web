import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import DocValidationPrev from './Dialogs/DocValidationPrev';

function DocForValidate() {
  const [open, setOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);

  // Example image URL (replace with your actual image source)
  const sampleImgUrl = '/public/sample-doc.jpg';

  const handlePreview = (imgUrl) => {
    setPreviewImg(imgUrl);
    setOpen(true);
  };

  return (
    <div className="w-full bg-white p-6 mx-auto">
      {/* Headless UI Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
          >
            <div className="fixed inset-0 bg-gray-500 opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                  <DocValidationPrev imgUrl={previewImg} onClose={() => setOpen(false)} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className='p-4 shadow-md rounded-lg'>

        <h2 className="text-xl font-semibold mb-1">Upload Document By Contractor</h2>
        <p className="text-sm text-gray-500 mb-4">Confirm document and move for application</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 font-medium text-left">Sr.</th>
                <th className="px-4 py-2 font-medium text-left">Contractor</th>
                <th className="px-4 py-2 font-medium text-left">Application Type</th>
                <th className="px-4 py-2 font-medium text-left">Email/Link Send At</th>
                <th className="px-4 py-2 font-medium text-left">Number Of Labour</th>
                <th className="px-4 py-2 font-medium text-left">Bill Amount</th>
                <th className="px-4 py-2 font-medium text-left">Status</th>
                <th className="px-4 py-2 font-medium text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Row 1 */}
              <tr className="last:border-b-0">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <div>
                      <div className="font-medium text-gray-900">Name Of contractor</div>
                      <div className="text-xs text-blue-500">Email and Mobile</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">BOCW</td>
                <td className="px-4 py-3">Date</td>
                <td className="px-4 py-3">200</td>
                <td className="px-4 py-3">45679/-</td>
                <td className="px-4 py-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-semibold">Pending For Doc</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-gray-100 cursor-pointer" onClick={() => handlePreview(sampleImgUrl)}>
                      <img src="/public/Icons/ic_preview.svg" alt="preview" className='w-6' />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 cursor-pointer">
                      <img src="/public/Icons/ic_return.svg" alt="preview" className='w-6' />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <div>
                      <div className="font-medium text-gray-900">Name Of contractor</div>
                      <div className="text-xs text-blue-500">Email and Mobile</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">BOCW</td>
                <td className="px-4 py-3">Date</td>
                <td className="px-4 py-3">200</td>
                <td className="px-4 py-3">45679/-</td>
                <td className="px-4 py-3">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-xs font-semibold">Pending For Review</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-gray-100 cursor-pointer" onClick={() => handlePreview(sampleImgUrl)}>
                      <img src="/public/Icons/ic_preview.svg" alt="preview" className='w-6' />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 cursor-pointer">
                      <img src="/public/Icons/ic_return.svg" alt="preview" className='w-6' />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DocForValidate;