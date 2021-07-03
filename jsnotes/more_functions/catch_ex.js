try {
  hi();
} catch(e) {
  console.log('caught error!');
  console.log(e);
} finally {
  console.log('finally');
}
