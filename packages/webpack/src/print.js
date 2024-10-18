export default function printMe() {
  console.log('I get called from print.js 1234!');

  import('./a').then(module => {
    const res = module.add(1, 2)
    console.log('res: ', res);
  })
}