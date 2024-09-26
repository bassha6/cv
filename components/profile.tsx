
export default function Profile() {
  return (
    <div className="flex items-center gap-x-3">
      {/* <div className="shrink-0">
        <Image className="shrink-0 size-16 rounded-full" src="/placeholder.svg?height=64&width=64" alt="Avatar" width={64} height={64} />
      </div> */}
      <div className="grow">
        <h1 className="text-lg font-medium text-gray-800">
         Ebrahim Shefawe
        </h1>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          Fullstack Web and Mobile developer | UI/UX Designer
        </p>
      </div>
    </div>
  )
}