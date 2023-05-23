import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-12 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image 
          src="/images/logo.png"
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
        />
      </div>
    </div>
  )
}
