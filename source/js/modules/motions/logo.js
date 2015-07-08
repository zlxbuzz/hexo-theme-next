function logoMotion () {
  var sequence = [
    { e: $('.brand'), p: { opacity: 1 }, o: { duration: 100 } },
    { e: $('.logo'), p: { opacity: 1, top: 0 }, o: { duration: 50} }
  ];

  isMist() && sequence.push(
    { e: $('.logo-line-before i'), p: { translateX: '100%' }, o: { duration: 500, sequenceQueue: false } },
    { e: $('.logo-line-after i'), p: { translateX: '-100%' }, o: { duration: 500, sequenceQueue: false } }
  );

  sequence.push({ e: $('.site-title'), p: { opacity: 1, top: 0 }, o: { duration: 200 } });

  $.Velocity.RunSequence(sequence);
}

export default logoMotion;
