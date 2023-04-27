'use client'
export default function CursorWrapper ({
    children,
  }: {
    children: React.ReactNode
  }) {
    const handleMouseMove = (e:any) => {
        const cursor:any = document.querySelector('.cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
    return <div className="container-a" onMouseMove={handleMouseMove}>
        <div className="cursor"></div>
        {children}
    </div>
}