import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 86400

export default function Home() {
  return (
    <div className="mx-auto">
      <div>
        <MyProfilePic />
      </div>
      <div>
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Ritta</span>
          </span>
        </p>
      </div>

      <Posts />
    </div>
  )
}
