/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/dashboard',
				permanent: false // Chuyển hướng tạm thời (HTTP 307)
			}
		];
	}
};

export default nextConfig;
