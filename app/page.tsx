import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Gallery } from '@/components/gallery'
import { Timeline } from '@/components/timeline'
import { SmoothScroll } from '@/components/smooth-scroll'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 data-[theme=ocean]:from-blue-100 data-[theme=ocean]:to-blue-200 data-[theme=forest]:from-green-100 data-[theme=forest]:to-green-200 data-[theme=cute]:from-pink-100 data-[theme=cute]:to-pink-200">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-pink-500 dark:hover:text-pink-400">首页</Link></li>
            <li><Link href="#about" className="hover:text-pink-500 dark:hover:text-pink-400">关于XX</Link></li>
            <li><Link href="#gallery" className="hover:text-pink-500 dark:hover:text-pink-400">相册</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>

      <main>
        <SmoothScroll />
        <section className="hero relative h-[70vh] flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">我永远喜欢XX</h1>
            <p className="text-xl md:text-2xl">因为XX,生活更美好</p>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">关于XX</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          XX是如此美好,它让我的生活充满了色彩和意义。无论是晴天还是雨天,XX总能给我带来温暖和快乐。
          它不仅仅是一个爱好,更是我生命中不可或缺的一部分。
        </p>
        <p className="text-lg leading-relaxed">
          每一天与XX在一起,都是一次新的冒险。它教会了我如何欣赏生活中的细节,如何在平凡中发现不平凡。
          XX不仅丰富了我的内心世界,还让我结识了许多志同道合的朋友。
        </p>
      </div>
      <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/placeholder.svg?height=600&width=800"
          alt="XX的精彩瞬间"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">我与XX的时间线</h3>
        <Timeline />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">XX的魅力</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>独特的艺术风格，让人眼前一亮</li>
          <li>丰富的故事情节，引人入胜</li>
          <li>深刻的人物刻画，令人难忘</li>
          <li>精美的画面设计，赏心悦目</li>
        </ul>
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4">XX迷必读</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h5 className="font-semibold mb-2">《XX的艺术》</h5>
              <p className="text-sm">深入探讨XX的艺术价值和文化影响</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h5 className="font-semibold mb-2">《XX的秘密》</h5>
              <p className="text-sm">揭示XX背后不为人知的创作故事</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section id="gallery" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">XX相册</h2>
          <Gallery />
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 data-[theme=ocean]:bg-blue-100 data-[theme=forest]:bg-green-100 data-[theme=cute]:bg-pink-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 我永远喜欢XX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

