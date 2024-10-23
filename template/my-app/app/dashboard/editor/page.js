
"use client"


import Profile from "@/components/editor/profile/Profile";
import Password from "@/components/editor/change/Password";
import Logout from "@/components/editor/logout/Logout";
import NewsPost from "@/components/editor/newsform/NewsPost";
import Table from "@/components/editor/newsform/Table";
import Category from "@/components/editor/category/Category";
import Subcategory from "@/components/editor/subcategory/Subcategory";


import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 col-12 d-flex justify-content-center mb-3 mb-md-0">
          <ul className="nav flex-column flex-md-column nav-pills overflow-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <li className="nav-item mb-2">
              <a
                className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                id="v-pills-tab1-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab1"
                role="tab"
                aria-controls="v-pills-tab1"
                aria-selected={activeTab === 'tab1'}
                onClick={() => handleTabClick('tab1')}
              >
                Profile Update
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                id="v-pills-tab2-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab2"
                role="tab"
                aria-controls="v-pills-tab2"
                aria-selected={activeTab === 'tab2'}
                onClick={() => handleTabClick('tab2')}
              >
                Change Password
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                id="v-pills-tab3-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab3"
                role="tab"
                aria-controls="v-pills-tab3"
                aria-selected={activeTab === 'tab3'}
                onClick={() => handleTabClick('tab3')}
              >
                Create NewsPost
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
                id="v-pills-tab4-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab4"
                role="tab"
                aria-controls="v-pills-tab4"
                aria-selected={activeTab === 'tab4'}
                onClick={() => handleTabClick('tab4')}
              >
                All NewsPost
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className={`nav-link ${activeTab === 'tab5' ? 'active' : ''}`}
                id="v-pills-tab5-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab5"
                role="tab"
                aria-controls="v-pills-tab5"
                aria-selected={activeTab === 'tab5'}
                onClick={() => handleTabClick('tab5')}
              >
                Logout
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className={`nav-link ${activeTab === 'tab6' ? 'active' : ''}`}
                id="v-pills-tab6-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab6"
                role="tab"
                aria-controls="v-pills-tab6"
                aria-selected={activeTab === 'tab6'}
                onClick={() => handleTabClick('tab6')}
              >
                Category
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className={`nav-link ${activeTab === 'tab7' ? 'active' : ''}`}
                id="v-pills-tab7-tab"
                data-bs-toggle="pill"
                href="#v-pills-tab7"
                role="tab"
                aria-controls="v-pills-tab7"
                aria-selected={activeTab === 'tab7'}
                onClick={() => handleTabClick('tab7')}
              >
                Subcategory
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <div className="tab-content text-center" id="v-pills-tabContent">
            <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="v-pills-tab1" role="tabpanel" aria-labelledby="v-pills-tab1-tab">
              <h4>Profile Update</h4>
              <Profile />
            </div>
            <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="v-pills-tab2" role="tabpanel" aria-labelledby="v-pills-tab2-tab">
              <h4>Password Change</h4>
              <Password />
            </div>
            <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} id="v-pills-tab3" role="tabpanel" aria-labelledby="v-pills-tab3-tab">
              <h4>Create News Post</h4>
              <NewsPost />
            </div>
            <div className={`tab-pane fade ${activeTab === 'tab4' ? 'show active' : ''}`} id="v-pills-tab4" role="tabpanel" aria-labelledby="v-pills-tab4-tab">
              <h4>All news</h4>
              <Table />
            </div>
            <div className={`tab-pane fade ${activeTab === 'tab5' ? 'show active' : ''}`} id="v-pills-tab5" role="tabpanel" aria-labelledby="v-pills-tab5-tab">
              <Logout />
            </div>
            <div className={`tab-pane fade ${activeTab === 'tab6' ? 'show active' : ''}`} id="v-pills-tab6" role="tabpanel" aria-labelledby="v-pills-tab6-tab">
              <Category />
            </div>
            <div className={`tab-pane fade ${activeTab === 'tab7' ? 'show active' : ''}`} id="v-pills-tab7" role="tabpanel" aria-labelledby="v-pills-tab7-tab">
              <Subcategory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}