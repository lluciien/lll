const events = [
  { date: '2020年1月1日', title: '初次接触XX', description: '这一天,我第一次接触到XX,从此便无法自拔。' },
  { date: '2021年6月15日', title: 'XX大赛获奖', description: '在全国XX大赛中获得了优秀奖,这更加坚定了我对XX的热爱。' },
  { date: '2022年12月31日', title: 'XX成为生活的一部分', description: 'XX已经完全融入我的生活,每一天都因它而变得更加美好。' },
]

export function Timeline() {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-px h-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-4 h-4 rounded-full bg-pink-500 border-4 border-white dark:border-gray-900"></div>
          </div>
          <div className="pb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
            <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

