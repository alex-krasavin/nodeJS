
setTimeout(() => {
    console.log('Был диван,');
}, 0);

setTimeout(() => {
    console.log('На диване');
}, 10);

process.nextTick(() => {
    console.log('Чемодан,');
});

setImmediate(() => {
    console.log('Ехал слон.');
});

setImmediate(() => {
    console.log('Кто не верит –');
});

setImmediate(() => {
    console.log('Выйди вон!');
});

process.nextTick(() => {
    console.log('В чемодане');
});

console.log('Плыл по морю');
