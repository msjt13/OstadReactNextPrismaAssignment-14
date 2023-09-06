import React from 'react';

const Page = () => {

    //get token form query string
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    return (
        <main>

        </main>
    );
};

export default Page;