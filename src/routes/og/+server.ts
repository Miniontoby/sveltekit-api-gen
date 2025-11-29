import { ImageResponse } from '@ethercorps/sveltekit-og';

const fontFile = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff');
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

const template = `
 <div tw="bg-slate-900 flex w-full h-full flex-col items-center justify-center p-12">
    <div tw="flex items-center justify-center mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="128" height="128">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="1" />
            <stop offset="100%" stop-color="#4338ca" stop-opacity="1" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#grad)" />
        <path d="M24 20 C 20 20, 18 22, 18 26 L 18 28 C 18 30, 16 32, 14 32 C 16 32, 18 34, 18 36 L 18 38 C 18 42, 20 44, 24 44" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M40 20 C 44 20, 46 22, 46 26 L 46 28 C 46 30, 48 32, 50 32 C 48 32, 46 34, 46 36 L 46 38 C 46 42, 44 44, 40 44" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <circle cx="32" cy="32" r="5" fill="#FF3E00" filter="url(#glow)" />
      </svg>
    </div>
    <h1 tw="text-6xl font-bold text-white mb-4 tracking-tight text-center">SvelteKit OpenAPI</h1>
    <p tw="text-3xl text-slate-400 mb-12 text-center max-w-3xl">Generate API clients and types for your SvelteKit app automatically.</p>
    <div tw="flex mt-4 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-2xl px-10 py-6">
      <span tw="text-indigo-500 mr-4 text-3xl font-bold">$</span>
      <span tw="text-slate-200 text-3xl tracking-wide">npm install sveltekit-openapi-generator</span>
    </div>
  </div>
`;

export const GET = async () => {
	return new ImageResponse(template, {
		height: 630,
		width: 1200,
		fonts: [
			{
				name: 'Inter Latin',
				data: fontData,
				weight: 400
			}
		]
	});
};
