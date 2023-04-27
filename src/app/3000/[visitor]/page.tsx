'use client'
import Chat from "@/app/components/chat";
import Navbar from "@/app/components/nav";
// import Waiting from "@/app/components/waiting";
import { queryParams } from "@/app/interfaces/params";
// import Greeting from "@/app/components/greeting"
import Cube from "@/app/components/cube";
import Ballon from "@/app/components/balloon";
import Map from "@/app/components/map";
export default function Port3000 ({ params }: queryParams ) {

    const handleMouseMove = (e:any) => {
        const cursor:any = document.querySelector('.cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    return <>
    <div id="container" onMouseMove={handleMouseMove}>
    <div className="cursor"></div>
    <Chat params={params} />
    </div>
    </>
}