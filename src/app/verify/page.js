'use client'

import React, {useEffect} from 'react';
import { useSearchParams } from 'next/navigation'
import {useRouter} from "next/navigation";

const Page = () => {

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const router = useRouter();

    console.log("token: ", token);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token})
            });

            const data = await response.json();

            if(data.success === true) {
                router.replace('/dashboard');
            }
            else {
                router.replace('/register');
            }
        }

        fetchData();

    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1>Verifying your email...</h1>
        </main>
    );
};

export default Page;