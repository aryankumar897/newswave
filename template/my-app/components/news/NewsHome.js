import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/navigation';

export default function NewsSection() {
    const router = useRouter();



    return (
        <div className="container-fliud">
            <div className="row">


<h6>news</h6>


            </div>
        </div>
    );
};

