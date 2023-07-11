// Создать собственноручно файл `layout.html`
// Создать в нем базовую html-структуру.

// Используя модуль fs создать папку `html`
// Используя модуль fs создать файл `index.html`
// Используя модуль fs записать туда все содержимое из файла `layout.html`

const fs=require('fs');

//V1 
// fs.readFile('./layout.html', 'utf8', (err, data) => {
//     fs.mkdir('./html', () => {
//         fs.writeFile('./html/index.html', `${data}`, (err) => { })
//     })
// })

//V2
fs.readFile('./layout.html',(err,data)=>{
    if(err){
        console.log('Ошибка в самом начале')
    }
    else{
        let text=Buffer.from(data).toString();
        fs.mkdir('./html', () => {
        fs.writeFile('./html/index.html',`${text}`,(err)=>{
                if(err){
                console.log(`Error: ${err}`)}
                else{
                console.log('Папка создана, файл layout перезаписан в файле index.html')}
            })
        })
    }

})


 // node fs_hmw.js