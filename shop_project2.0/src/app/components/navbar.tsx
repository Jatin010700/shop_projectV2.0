import Link from "next/link"


export const NavBar = () => {
    return (
        <>
        <div className="fixed right-0 top-1/2">
           <div className="flex flex-col gap-4 pr-2 rounded-2xl">
            <Link href="/">
                <i className="bi bi-house-heart-fill icon"></i>
            </Link>

            <Link href="/wishlist">
                <i className="bi bi-cup-hot-fill icon"></i>
            </Link>

            <Link href="/">
            <i className="bi bi-bag-check-fill icon"></i>
            </Link>
           </div>
           
            
        </div>      
        </>
    )
}