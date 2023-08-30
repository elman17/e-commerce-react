import React from 'react';

const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className="flex items-center justify-end mt-4">
            <button
                className="bg-white border border-green-500 text-green-500 px-4 py-2 rounded-md mr-2 hover:bg-green-500 hover:text-white"
                onClick={() => handlePageChange(1)}
            >
                First
            </button>
            <div className="flex items-center">
                {pageNumbers.map((pageNumber) => (
                    <div
                        key={pageNumber}
                        className={`w-8 h-8 flex items-center justify-center text-green-500 border border-green-500 rounded-full mx-1 cursor-pointer ${pageNumber === currentPage ? 'bg-green-500 text-white' : 'bg-white'
                            }`}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                ))}
            </div>
            <button
                className="bg-white border border-green-500 text-green-500 px-4 py-2 rounded-md ml-2 hover:bg-green-500 hover:text-white"
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default CustomPagination;
