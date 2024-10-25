import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';

function ContactInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleShowMore = () => setShowMore(!showMore);

    return (
        <>
            <button
                onClick={openModal}
                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 shadow-md"
            >
                Contact Information
            </button>

            <Modal
                open={isModalOpen}
                onClose={closeModal}
                className="flex items-center justify-center"
            >
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto transition-transform transform duration-300 relative">
                    {/* Close Button */}
                    <Button
                        onClick={closeModal}
                        style={{
                            position: 'absolute',
                            background: 'transparent',
                            color: 'red',
                            top: '10px',
                            right: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        X
                    </Button>

                    <h3 className="text-3xl font-bold text-center mb-4">Contact Information</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-inner">
                            <svg
                                className="w-8 h-8 text-indigo-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.003 5.884l.545 1.09a15.44 15.44 0 006.238 6.237l1.09.545 2.528-2.528a1.5 1.5 0 011.668-.326l3.093 1.236a1.5 1.5 0 01.905 1.41v3.181A1.5 1.5 0 0116.03 20C9.51 20 4 14.49 4 7.97A1.5 1.5 0 015.5 6.47h3.181a1.5 1.5 0 011.41.904l1.236 3.094a1.5 1.5 0 01-.326 1.668L8.472 14.9z"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-semibold text-gray-700">📩 Email: </span>
                                    <a
                                        href="mailto:your-email@example.com"
                                        className="text-indigo-500 hover:underline"
                                    >
                                        your-email@example.com
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-700">📌 Address: </span>
                                    <span className="text-gray-700">Surat, Gujarat</span>
                                </div>
                            </div>
                        </div>

                        {/* Collapsible Section */}
                        <div>
                            <Button
                                onClick={toggleShowMore}
                                className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-300"
                            >
                                {showMore ? 'Show Less' : 'Show More'}
                            </Button>
                            {showMore && (
                                <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-50">
                                    <h4 className="text-lg font-semibold">Additional Information</h4>
                                    <p className="text-gray-600">
                                        Here you can include any additional information that might be useful but should not be publicly displayed.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ContactInfo;
