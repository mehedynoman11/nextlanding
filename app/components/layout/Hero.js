import Image from "next/image";
import img1 from "@/public/butterfly.png"
import Link from "next/link";

export default function Hero(){
    return (
        <section className="w-full min-h-screen">
            <div className="mt-6 flex items-center w-full mobile1">
                <div className="sm:w-1/2 w-full">
                   <div className="max-w-[600px] sm:text-left ml-10 mobile3">
                   <h1 className="text-6xl font-bold mb-5">App Landing</h1>
                    <p className="text-2xl">It is a long established fact 
                        that a reader will be distracted 
                        by the readable content of a page 
                        when looking at its layout</p>
                   </div>
                </div>
                <div className="block m-auto mr-10">
                    <Link href={'/'} className="max-w-[600px] ">
                        <Image src={img1} width={400}
                        className=' h-auto 
                        block md:inline-block md:w-full'/>
                    </Link>
                </div>
            </div>
        </section>
    )
}