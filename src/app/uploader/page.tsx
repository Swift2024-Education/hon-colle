'use client'
import React from 'react';
import { useState } from 'react';
import { useZxing } from 'react-zxing';

export const runtime = 'edge';

export default function Page (){
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });

    return(
        <>
            <div className='bg-gradient-to-b from-white to-stone-300 h-dvh'>
                <p className='text-gray-700 text-3xl font-bold text-center p-3'>
                    Uploder Page
                </p>
                <div className='flex justify-center'>
                    <video width='320' height='640' ref={ref} />
                </div>
                <p className='text-gray-700 text-xl text-center p-3'>
                    <span>Last result: </span>
                    <span>{result}</span>
                </p>
            </div>
        </>
    );
}