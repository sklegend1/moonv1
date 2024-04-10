import Nav_Desktop from "@/components/Nav_Desktop";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-[#01121c] absolute w-screen text-white overflow-x-hidden  ">
        <header className=" ">
          <Nav_Desktop/>
          
        </header>
        
          {children}
        
      </body>
    </html>
  );
}

