export default function Quotes() {
  const quotes = [
    "阅读一切好书如同和过去最杰出的人谈话。",
    "读书是在沉默中发现生活的方式。",
    "我们若已接受最坏的，就再没有什么损失。",
    "如果没有梯子，那就要善于攀登。",
    "高谈者未必有高见，沉默时也许在沉思。",
    "只有一种习惯才能抑制另一种习惯。",
    "凡事不要自我设限，凡事皆有可能。",
    "认真做事的人终有回报。",
    "只有信念使快乐真实。",
    "没有意志，理想便是幻想。",
    "君子藏器于身，待时而动。",
  ]
  return quotes[Math.floor(Math.random() * quotes.length)];
}