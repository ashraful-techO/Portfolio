"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const CVPreview = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pdfError, setPdfError] = useState(false);

    // Reset error state when modal opens
    useEffect(() => {
        if (isOpen) {
            setPdfError(false);
        }
    }, [isOpen]);

    return (
        <>
            {/* View CV Button */}
            <Button
                onClick={() => setIsOpen(true)}
                variant="outline"
                size="lg"
                className="mt-6"
            >
                View CV
            </Button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex shrink-0 items-center justify-between border-b px-5 py-3">
                            <h2 className="font-semibold text-slate-900">
                                CV Preview
                            </h2>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-md text-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                                aria-label="Close CV preview"
                            >
                                ×
                            </button>
                        </div>

                        {/* PDF Preview Container */}
                        <div className="w-full flex-1 bg-slate-50">
                            {pdfError ? (
                                <div className="flex h-full items-center justify-center p-8 text-center">
                                    <div>
                                        <p className="mb-4 text-slate-600">
                                            Unable to preview the PDF.
                                        </p>
                                        <a
                                            href="/cv.pdf"
                                            download
                                            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                        >
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    src="/cv.pdf#toolbar=0&navpanes=0"
                                    className="h-full w-full border-none"
                                    title="CV PDF Preview"
                                    onError={() => setPdfError(true)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CVPreview;