import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section className="w-full flex justify-center">
      <div>
        <Image 
          className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full flex justify-center mt-8 w-32 h-32"
          src="/images/profile-photo.jpg"
          width={100}
          alt="Ritta Sweta"
          priority={true}
        />
      </div>
    </section>
  )
}
