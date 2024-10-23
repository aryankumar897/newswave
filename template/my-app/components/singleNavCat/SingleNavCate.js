 "use client"

import Drower from "@/components/togglecategory/Drower"
import Search from "@/components/search/Search"
import Account from '@/components/account/Account';
import Navbar from '@/components/fixednav/Navbar'

 export default function SingleNavCate(){


return(   


<>       
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <Drower />
                <Search />
            </div>
            <div style={{ textAlign: 'center', flexGrow: 1 }}>
                <h4>NewsWave</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <Account />
            </div>
        </div>
        <hr />
        <Navbar /> 
  </>

  )
 }