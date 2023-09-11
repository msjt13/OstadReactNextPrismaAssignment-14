import React from 'react';
import {absoluteUrl} from "@/utility/utils";
import Link from "next/link";

const Page = () => {
    const url = absoluteUrl('');
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href={url}>
                <h3>Dashboard</h3>
            </Link>
            <p>Your email has been verified and you are logged in. </p>
        </main>
    );
};

export default Page;