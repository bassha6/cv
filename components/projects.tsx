
export default function Projects() {


  const data = [
    {
      img:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Ethiopian_Football_Federation.svg/300px-Ethiopian_Football_Federation.svg.png?20231126031022',
      name:'Ethiopian Football Federation'
    },
    {
      img:'https://media.licdn.com/dms/image/v2/C510BAQGYyzlUUuQZ_w/company-logo_200_200/company-logo_200_200/0/1630573908091/vida_telecom_singapore_logo?e=2147483647&v=beta&t=SDHzgPJKFM5AobupjiJChv7R30F--6PYNSYCaBcR38c',
      name:'Vida Technologies'
    },
    {
      img:'data:image/png;base64,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',
      name:'Know your sales'
    }

  ]

  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800">
        Projects
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {data.map((item,index) => (
          <a key={index} className="group block relative overflow-hidden rounded-lg " href="#">
            <img className="w-full p-4 object-contain size-40 border border-gray-200 rounded-lg" src={item.img} alt={`Project ${item.name}`} width={160} height={160} />
            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
              <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
               
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

