const bgGradientColorList = [
  'bg-gradient-to-r from-[#103ce7] to-[#64e9ff]',
  'bg-gradient-to-r from-[#2dfff5] to-[#fff878]',
  'bg-gradient-to-r from-[#6157ff] to-[#ee49fd]',
  'bg-gradient-to-r from-[#ff4066] to-[#fff16a]',
  'bg-gradient-to-r from-[#0700de] to-[#ddffc9]',
  'bg-gradient-to-r from-[#ff8473] to-[#fff9d2]',
  'bg-gradient-to-r from-[#0172af] to-[#74febd]',
];

export const randomBgColor = () => {
  const randomNumber = ~~(Math.random() * bgGradientColorList.length);

  return bgGradientColorList[randomNumber];
};
