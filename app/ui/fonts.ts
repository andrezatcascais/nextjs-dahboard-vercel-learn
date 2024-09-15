import { Inter, Montserrat, Poppins, Lusitana, Fascinate } from 'next/font/google';
  
export const inter = Inter({ subsets: ['latin'] });

export const mont = Montserrat({ subsets: ['latin'] });

export const popp = Poppins({
    subsets: ['latin'],
    weight: '500'
});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const fascinate = Fascinate({
    subsets: ['latin'],
    weight: '400'
});