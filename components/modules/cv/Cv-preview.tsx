"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const CVPreview = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                variant="secondary"
                size="sm"
                className="mt-0"
            >
                Resume
            </Button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex shrink-0 items-center justify-between border-b px-5 py-3">
                            <h2 className="font-semibold text-slate-900">CV Preview</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-md text-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                ×
                            </button>
                        </div>

                        <div className="flex-1 bg-slate-50">
                            <iframe
                                src="/cv.pdf"
                                className="h-full w-full border-none"
                                title="CV PDF Preview"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CVPreview;