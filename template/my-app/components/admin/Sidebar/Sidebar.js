"use client"


import { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { MdLegendToggle } from "react-icons/md";
export default function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
        setActiveSubMenu(null); // Close any open submenus when toggling the sidebar
    };

    const handleSubMenuClick = (submenu) => {
        setActiveSubMenu((prevSubMenu) => (prevSubMenu === submenu ? null : submenu));
    };

    const SidebarMenu = ({ menu }) => {
        const [hoveredItem, setHoveredItem] = useState(null);


        return (

            <>

                <div className='p-1  pp   border-0 '
                    style={{
                        width: '350px',  // Set desired width
                        height: '550px', // Set desired height
                        overflowY: 'auto', // Enable vertical scrolling
                        overflowX: 'hidden', // Hide horizontal scrollbar
                        border: '1px solid #ccc'


                        // Optional: Add a border for visual distinction
                    }}




                >
                    {menu.map((item) => (
                        <div key={item.id} >
                            <div onClick={() => handleSubMenuClick(item.id)}>
                                <a href={item.id}

                                    style={{
                                        fontWeight: '600',
                                        color: hoveredItem === item.id ? 'blue' : 'black',
                                        textDecoration: hoveredItem === item.id ? 'underline' : 'none'
                                    }}


                                >{item.title}</a>

                                <span style={{ marginLeft: "200px" }}  >    {item.submenu && (activeSubMenu === item.id ? <FaChevronDown size="15" /> : <FaChevronRight size="15" />)}
                                </span>
                            </div><hr />
                            {item.submenu && activeSubMenu === item.id && (
                                <SidebarSubMenu submenu={item.submenu} />
                            )}
                        </div>
                    ))}
                </div>
                <style>
                    {`
          .pp::-webkit-scrollbar {
            width: 12px;
          }
          .pp::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .pp::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 6px;
          }
          .pp::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
                </style>
            </>
        );
    };

    const SidebarSubMenu = ({ submenu }) => {
        const [hoveredItem, setHoveredItem] = useState(null);

        return (
            <div className="pl-5  ">
                {submenu.map((subitem) => (
                    <div key={subitem.id}>
                        <a
                            href={subitem.id}
                            style={{
                                color: hoveredItem === subitem.id ? 'blue' : 'black',
                                textDecoration: hoveredItem === subitem.id ? 'underline' : 'none',
                                fontWeight: 'bold'


                            }}
                            onMouseEnter={() => setHoveredItem(subitem.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {subitem.title}
                        </a><hr />
                        <br />
                    </div>
                ))}
            </div>
        );
    };




    const menuData = [
        {
            id: "/dashboard/admin",
            title: 'Dashboard',
        },

        {
            id: "#",
            title: 'Users',
            submenu: [
                {
                    id: "/dashboard/admin/alluser",
                    title: 'All Users',
                },
                {
                    id: "/dashboard/admin/addnewadmin",
                    title: 'Add New Admin',
                },
                {
                    id: "/dashboard/admin/alladmin",
                    title: 'all admin',
                },
            ],
        },




        {
            id: "##",
            title: 'Category',
            submenu: [
                {
                    id: "/dashboard/admin/addcategory",
                    title: 'Add category',
                },
                {
                    id: "/dashboard/admin/allcategory",
                    title: 'All category',
                },
            ],
        },

        {
            id: "###",
            title: 'Subcategory',
            submenu: [
                {
                    id: "/dashboard/admin/addsubcategory",
                    title: 'Add New Subcategory',
                },
                {
                    id: "/dashboard/admin/allsubcategory",
                    title: 'All Subategory',
                },
            ],
        },




        {
            id: "####",
            title: 'News Posts',
            submenu: [
                {
                    id: "/dashboard/admin/addnews",
                    title: 'Add New Post',
                },
                {
                    id: "/dashboard/admin/allnews",
                    title: 'All news Posts',
                },

            ],
        },
        {
            id: "#####",
            title: 'News  Banner',
            submenu: [
                {
                    id: "/dashboard/admin/addbanner",
                    title: 'Add New Banner',
                },
                {
                    id: "/dashboard/admin/allbanner",
                    title: 'All news Banner',
                },

            ],
        },

        {
            id: "######",
            title: 'Image library',
            submenu: [
                {
                    id: "/dashboard/admin/addimage",
                    title: 'Add New Image',
                },
                {
                    id: "/dashboard/admin/allimage",
                    title: 'All Image',
                },

            ],
        },
        {
            id: "#######",
            title: 'video library',
            submenu: [
                {
                    id: "/dashboard/admin/addvideo",
                    title: 'Add New video',
                },
                {
                    id: "/dashboard/admin/allvideo",
                    title: 'All video',
                },

            ],
        },
        {
            id: "########",
            title: 'Subcriber',
            submenu: [

                {
                    id: "/dashboard/admin/allsubcriber",
                    title: 'All Subcriber',
                },

            ],
        },


        {
            id: "#########",
            title: 'Live',
            submenu: [

                {
                    id: "/dashboard/admin/addlive",
                    title: 'Add live',
                },

            ],
        },

    ];


    const menuDatas = [
        {
            id: "/dashboard/admin",
            title: 'Dashboard',
        },

        {
            id: "#",
            title: 'Users',
            submenu: [
                {
                    id: "/dashboard/admin/alluser",
                    title: 'All Users',
                },
                {
                    id: "/dashboard/admin/addnewadmin",
                    title: 'Add New Admin',
                },
                {
                    id: "/dashboard/admin/alladmin",
                    title: 'all admin',
                },
            ],
        },

        {
            id: "##",
            title: 'Category',
            submenu: [

                {
                    id: "/dashboard/admin/allcategory",
                    title: 'All category',
                },
            ],
        },

        {
            id: "###",
            title: 'Subcategory',
            submenu: [
                {
                    id: "/dashboard/admin/addsubcategory",
                    title: 'All Subcategory',
                },

            ],
        },
        {
            id: "####",
            title: 'News Posts',
            submenu: [
                {
                    id: "/dashboard/admin/addnews",
                    title: 'All news Posts',
                },
                {
                    id: 52,
                    title: 'Add New Post',
                },
            ],
        },
    ];






    return (
        <div className={`sidebar   ${isMenuOpen ? 'open' : ''}`}>
            <div className="toggle-btn" onClick={toggleMenu}>
                <MdLegendToggle size="35" />

            </div>

          
            {isMenuOpen && <SidebarMenu menu={true ? menuData : menuDatas} />}


        </div>
    );
};

