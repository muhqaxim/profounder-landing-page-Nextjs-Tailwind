const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/profounder-landing-page-Nextjs-Tailwind/' : '',
  images: {
    unoptimized: true
  },
};
