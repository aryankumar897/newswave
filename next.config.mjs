/** @type {import('next').NextConfig} */




import config from './config.js'
const nextConfig = {


    env: {


        DB_URI: config.DB_URI,
        API: config.API,
        NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,


        CLOUDINARY_CLOUD_NAME:config.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY:config.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET:config.CLOUDINARY_API_SECRET,
CLIENT_URL: config.CLIENT_URL,
        GOOGLE_API_KEY: config.GOOGLE_API_KEY

    }




};

export default nextConfig;
