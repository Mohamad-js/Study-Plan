import { StudyPlanProvider } from "@/context/StudyPlanContext"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";


export const metadata = {
  title: "Fatemeh App",
  description: "Powered by Mohamad Gomar",
  viewport: {
   width: 'device-width',
   initialScale: 1.0,
   maximumScale: 1.0,
   userScalable: false,
},
};

export default function RootLayout({ children }) {
  return (
   <StudyPlanProvider>
      <html lang="en">
         <body>
            {children}
            <SpeedInsights />
         </body>
      </html>
   </StudyPlanProvider>
  );
}
