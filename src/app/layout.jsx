import { StudyPlanProvider } from "@/context/StudyPlanContext"
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
   <StudyPlanProvider>
      <html lang="en">
         <body>
            {children}
         </body>
      </html>
   </StudyPlanProvider>
  );
}
