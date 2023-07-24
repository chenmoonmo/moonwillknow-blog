import { Me } from "@/components/me";

const findMe = [
  {
    name: "Github",
    icon: "🐙",
    link: "https://github.com/chenmoonmo",
  },
  {
    name: "Twitter",
    icon: "🐦",
    link: "https://twitter.com/chenjustcam",
  },
  {
    name: "Email",
    icon: "📧",
    link: "mailto:chenmoonmo@gamil.com",
  },
];

export default function About() {
  return (
    <main className="relative max-w-2xl px-10 py-5 container mx-auto text-base font-medium leading-6 md:py-20">
      <article className="flex flex-col items-center p-5 bg-green-600 rounded-md shadow-md shadow-green-800 text-gray-50">
        <Me width={100} height={undefined} />
        <p className="mt-2">
          您好，我是 Moon，你也可以叫我 “猛蚁” 或
          Simon。我是一名前端开发者，Javascript / Typescript 是我最喜欢的语言。
        </p>
        <p className="mt-2">
          我喜欢 Web 应用的自由和包容，我也乐于见证 Web
          技术的高速发展。可能我不是最聪明的也不是最弄潮的，但我想用自己的力量为自己写一些东西。
        </p>
        <p className="mt-2">
          其实经常听到有人说：“前端是很简单的技术不值得研究”，但是我觉得前端是一种艺术。用交互和展示来沟通机器和人类，这是一件很浪漫的事。
          可能现在的我并谈不上艺术，但是未来我想加强自己在 UI 和 UX
          上的能力和感受。加强如何使用前端来表达自己的认知和情绪的能力。
          我不想成为最好的代码阅读机器，我更想成为最好的代码创意工作者。
        </p>
        <p className="mt-2">
          目前前端我要学习的还很多。我也乐于参与开源项目来为前端的发展做出贡献。
          这个博客项目未来会被完善后开源，这里目前是我记录学习和生活的地方。你可以通过这些地方找到其他的我。
        </p>
        <p className="flex  cursor-pointer items-center justify-center mt-10">
          {findMe.map((item) => (
            <a
              key={item.name}
              className="min-h-[72px] relative text-6xl mx-3 select-none md:mx-10 transition-all hover:drop-shadow-lg hover:after:visible hover:after:opacity-100 after:absolute  after:top-0  after:left-1/2  after:content-[attr(data-name)]   after:text-base  after:-translate-y-full  after:-translate-x-1/2  after:invisible  after:opacity-0  after:transition-opacity "
              href={item.link}
              target="_blank"
              rel="noreferrer"
              data-name={item.name}
            >
              {item.icon}
            </a>
          ))}
        </p>
      </article>
    </main>
  );
}
