"use client"

import { useState, useEffect } from "react"


import Profile from "@/components/user/profile/Profile"
import Password from "@/components/user/change/Password"
 import Logout from "@/components/user/logout/LogOut"

 import Premuim from "@/components/user/premuim/PremuimNews"
 import Subscription from "@/components/user/subscription/Subscription"
import Order from "@/components/user/order/Order"



export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1')
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab')


    if (savedTab) {
      setActiveTab(savedTab)

    }



  }, [])

  const handleTabClick = (tab) => {

    setActiveTab(tab)
    localStorage.setItem('activeTab', tab)

  }



  return (
    <>
      <div className="container">

        <div className="row justify-content-center">


          <div className="col-md-3 col-12 d-flex  justify-content-center mb-3 mb-md-0">

            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className=

                {
                  `nav-link  ${activeTab === "tab1" ? "active" : ""} `
                }


                id="v-pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button" role="tab"
                aria-controls="v-pills-home"
                aria-selected={activeTab === "tab1"}
                onClick={() => handleTabClick('tab1')}

              >Profile Update</button>
              <button


                className={
                  `nav-link  ${activeTab === "tab2" ? "active" : ""} `
                }


                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button" role="tab"
                aria-controls="v-pills-profile"
                aria-selected={activeTab === "tab2"}
                onClick={() => handleTabClick('tab2')}

              >change password</button>
              <button

                className={
                  `nav-link  ${activeTab === "tab3" ? "active" : ""} `
                }

                id="v-pills-messages-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button" role="tab"
                aria-controls="v-pills-messages"
                aria-selected={activeTab === "tab3"}
                onClick={() => handleTabClick('tab3')}
              >Premuim</button>
              <button
                className={
                  `nav-link  ${activeTab === "tab4" ? "active" : ""} `
                }

                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button" role="tab"
                aria-controls="v-pills-settings"
                aria-selected={activeTab === "tab4"}
                onClick={() => handleTabClick('tab4')}

              >subscription</button>

              <button
                className={
                  `nav-link  ${activeTab === "tab5" ? "active" : ""} `
                }


                id="v-pills-settings-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button" role="tab"
                aria-controls="v-pills-settings"
                aria-selected={activeTab === "tab5"}
                onClick={() => handleTabClick('tab5')}


              >Logout</button>
            
       
              <button
                className={
                  `nav-link  ${activeTab === "tab6" ? "active" : ""} `
                }


                id="v-pills-settings-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button" role="tab"
                aria-controls="v-pills-settings"
                aria-selected={activeTab === "tab6"}
                onClick={() => handleTabClick('tab6')}


              >Orders</button>




            </div>

          </div>

          <div className="col-md-9   ">
            <div className="tab-content" id="v-pills-tabContent">
              <div className={`tab-pane fade  ${activeTab === "tab1" ? "show active" : ""}`}
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <Profile />

              </div>
              <div className={`tab-pane fade  ${activeTab === "tab2" ? "show active" : ""}`}

                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"><Password /></div>
              <div className={`tab-pane fade  ${activeTab === "tab3" ? "show active" : ""}`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

              <Premuim/> </div>

              <div
                className={`tab-pane fade  ${activeTab === "tab4" ? "show active" : ""}`}

                id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Subscription/></div>
             
             
             
             
             
              <div className={`tab-pane fade  ${activeTab === "tab5" ? "show active" : ""}`}

                id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Logout /></div>
            

              <div className={`tab-pane fade  ${activeTab === "tab6" ? "show active" : ""}`}

                id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Order/></div>

            </div>
          </div>
        </div>




      </div>


    </>



  )



}