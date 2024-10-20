

import Sidebar from '@/components/admin/Sidebar'

export default function AdminLayout({ children }) {
    return (
        <>



            <div className="row">
                <div className="col-md-3  d-flex justify-content-start  mt-1">
                    <Sidebar />

                 
                </div>
                <div className="col-md-9">



                    {children}


                </div>
            </div>


        </>
    );
}