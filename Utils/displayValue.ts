export const commify = (value: string) => {
  // split {beforeComma}.{afterComma}
  const [beforeDot, afterDot] = value.split(".");
  let beforeCommacCommified = beforeDot;
  let partNum: string[] = [];
  if (beforeDot.length >= 4) {
    const beforeDotReveresedNums = beforeDot.split("").reverse();
    for (let i = 0; i < beforeDot.length; i += 3) {
      const startI = i;
      const endI = i + 3;
      partNum = [
        ...partNum,
        beforeDotReveresedNums.slice(startI, endI).reverse().join(""),
      ];
    }
    beforeCommacCommified = partNum.reverse().join(",");
  }
  return afterDot !== undefined
    ? `${beforeCommacCommified}.${afterDot}`
    : `${beforeCommacCommified}`;
};
