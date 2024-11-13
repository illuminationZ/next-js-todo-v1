import { Metadata } from "next";
import React, { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: "TODO",
    description: "TODO",
};

export default function TodoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </div>
    );
}