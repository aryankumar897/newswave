"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });
import { SessionProvider } from "next-auth/react";
import { CategoryProvider } from '@/context/category';
import { SubCategoryProvider } from "@/context/subcategory";

import { NewsPostProvider } from "@/context/newspost";

import { BannerProvider } from "@/context/banner";


import TopFooter from "@/components/topfooter/Footer"

import Footer from "@/components/footer/Footer"
import { EditorNewsPostProvider  } from "@/context/editornewspost";
import SingleNavCate from '@/components/singleNavCat/SingleNavCate';
import { usePathname } from 'next/navigation';
export default function RootLayout({ children }) {


 const  pathname=usePathname()



  return (
    <html lang="en">

      <SessionProvider>

        <CategoryProvider>
          <SubCategoryProvider>


            <NewsPostProvider>
              <BannerProvider >
                <EditorNewsPostProvider>
                <body className={inter.className}>
                  <ToastContainer />



 {pathname ==="/"?"":<SingleNavCate/>  }


                  {children}
                  <TopFooter/>
                  <Footer/>
                </body>
                </EditorNewsPostProvider>
              </BannerProvider>
            </NewsPostProvider>
          </SubCategoryProvider>
        </CategoryProvider>
      </SessionProvider>


    </html>
  );
}
