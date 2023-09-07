type Params = {
  params: {
    userId: string
  }
}

export default function UserPage({ params: { userId } }: Params) {// This component takes an object as a parameter, and it expects this object to have a params property that contains a userId property
  return (
    <div></div>
  )
}